import React, { useEffect, useState } from "react";
import Title from "../../components/Owner/Title";
import { assets, dummyMyBookingsData } from "../../assets/assets";

export default function ManageBookings() {
  const [booking, setBooking] = useState([]);

  const fetchBooking = () => {
    setBooking(dummyMyBookingsData);
  };

  useEffect(() => {
    fetchBooking();
  }, []);

  return (
    <div className="px-4 pt-10 md:px-10 w-full">
      <Title title="Manage Booking" subTitle="View All Booking Cars " />

      <div className="max-w-3x1 w-full rounded-md overflow-hidden border border-borderColor mt-6">
        <table className="w-full border-collapse text-left text-sm text-gray-600">
          <thead className="text-gray-500">
            <tr>
              <th className="p-3 font-medium">Car</th>
              <th className="p-3 font-medium max-md:hidden">Date Range</th>
              <th className="p-3 font-medium">Total</th>
              <th className="p-3 font-medium max-md:hidden">Payment</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {booking.map((car, index) => (
              <tr
                key={index}
                className="border-t border-borderColor text-gray-500"
              >
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={car.car.image}
                    alt=""
                    className="h-12 w-12 aspect-square rounded-md object-cover"
                  />

                  <div className="max-md:hidden">
                    <p className="font-medium">
                      {car.car.brand} {car.car.model}
                    </p>
                  </div>
                </td>

                <td className="p-3 max-md:hidden">
                  {car.pickupDate.split("T")[0]} to{" "}
                  {car.returnDate.split("T")[0]}
                </td>
                <td className="p-3 max-md:hidden">${car.price}</td>

                <td className="p-3 max-md:hidden">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                    offline
                  </span>
                </td>

                <td className="p-3">
                  {car.status === "pending" ? (
                    <select
                      value={car.status}
                      className="px-2 py-1.5 mt-1 text-gray-500 border border-borderColor rounded-md outline-none"
                    >
                      <option value="pending">Pending</option>
                      <option value="cancelled">Cancelled</option>
                      <option valüe="confirmed">Confirmed</option>
                    </select>
                  ) : (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${car.status === "confirmed" ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"}`}
                    >
                      {car.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
