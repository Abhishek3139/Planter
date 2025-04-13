import axios from 'axios';
import { useEffect, useState } from 'react';

function PaymentSuccess() {
  const [deliveryInfo, setDeliveryInfo] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/fedex/tracking`);
        setDeliveryInfo(response.data.data.output.completeTrackResults);
      } catch (err) {
        setError('Failed to fetch delivery information.');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const trackingNumber = deliveryInfo?.[0]?.trackingNumber;
  const scanEvents = deliveryInfo?.[0]?.trackResults?.[0]?.scanEvents || [];

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-green-700 mb-4">🎉 Payment Successful!</h1>

      {loading && <p className="text-gray-600">Fetching delivery info...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && (
        <>
          <p className="mb-4 text-gray-800">
            <strong>Tracking Number:</strong> {trackingNumber}
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-md">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left px-4 py-2 border-b">Description</th>
                  <th className="text-left px-4 py-2 border-b">Status</th>
                  <th className="text-left px-4 py-2 border-b">Date</th>
                  <th className="text-left px-4 py-2 border-b">Location</th>
                </tr>
              </thead>
              <tbody>
                {scanEvents.slice().reverse().map((event: any, index: number) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">{event.eventDescription}</td>
                    <td className="px-4 py-2 border-b">{event.derivedStatus}</td>
                    <td className="px-4 py-2 border-b">{event.date || 'N/A'}</td>
                    <td className="px-4 py-2 border-b">
                      {event.scanLocation?.city || 'Unknown'}, {event.scanLocation?.country || ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default PaymentSuccess;
