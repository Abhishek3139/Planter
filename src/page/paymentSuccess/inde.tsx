import axios from 'axios';
import { useEffect, useState } from 'react';

function PaymentSuccess() {
  const [deliveryInfo, setDeliveryInfo] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      const response = await axios('http://127.0.0.1:8000/api/v1/fedex/tracking');
      setDeliveryInfo(response.data.data.output.completeTrackResults);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Your tracking number is :{deliveryInfo && deliveryInfo[0]?.trackingNumber}</h1>
      <div>Delivey Status</div>
      <table>
        <tr>
          <th>Description</th>
          <th>Status</th>
        </tr>
        {deliveryInfo &&
          deliveryInfo[0]?.trackResults.map((track: any) => {
            return track.scanEvents.reverse().map((eve: any, i: number) => {
              return (
                <tr key={i}>
                  <td>{eve.eventDescription}</td>
                  <td>{eve.derivedStatus}</td>
                </tr>
              );
            });
          })}
      </table>
    </div>
  );
}

export default PaymentSuccess;
