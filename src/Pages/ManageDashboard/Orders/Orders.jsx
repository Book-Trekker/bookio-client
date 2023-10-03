import React from "react";
import ViewSummaryCart from "./ViewSummaryCart/ViewSummaryCart";
import TableSummary from "./TableSummary/TableSummary";

const Orders = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <ViewSummaryCart
            bgColor="#ff9f1c"
            iconBgColor="#fec272"
            icon="ri-calendar-todo-fill"
            label="Total Invoice"
            total="65"
            />
          <ViewSummaryCart
            bgColor="#4360f0"
            iconBgColor="#748efd"
            icon="ri-calendar-todo-fill"
            label="Total Invoice"
            total="65"
            />
          <ViewSummaryCart
            bgColor="#ff6a6b"
            iconBgColor="#ff9796"
            icon="ri-calendar-todo-fill"
            label="Total Invoice"
            total="65"
            />
          <ViewSummaryCart
            bgColor="#4dcdc4"
            iconBgColor="#7be4de"
            icon="ri-calendar-todo-fill"
            label="Total Invoice"
            total="65"
          />
        </div>
        <div>
          <h2 className="text-[1.5rem] font-[600] py-4">Recent Invoice</h2>
          <div>
             <TableSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
