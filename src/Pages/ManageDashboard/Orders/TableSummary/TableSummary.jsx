import React from 'react'
import { Card, IconButton, Typography } from "@material-tailwind/react";
import TablePagination from '../TablePagination/TablePagination';

  const TABLE_HEAD = ["Invoice ID", "Recipient", "Date", "Amount", "Status"];

  const TABLE_ROWS = [
    {
      invoice_id: "INV-012-345",
      recipient: "John Doe",
      date: "Mar 15,2021",
      amount: 256,
      status: "Paid"
    },
    {
      invoice_id: "INV-012-345",
      recipient: "John Doe",
      date: "Mar 15,2021",
      amount: 256,
      status: "Unpaid"
    },
    {
      invoice_id: "INV-012-345",
      recipient: "John Doe",
      date: "Mar 15,2021",
      amount: 256,
      status: "Paid"
    },
    {
      invoice_id: "INV-012-345",
      recipient: "John Doe",
      date: "Mar 15,2021",
      amount: 256,
      status: "Paid"
    },
  ];

const TableSummary = () => {
  return (
    <Card className="h-full w-full overflow-hidden shadow-sm">
    <table className="w-full min-w-max table-auto text-left">
      <thead>
        <tr className='text-center'>
          {TABLE_HEAD.map((head) => (
            <th key={head} className="border-b border-blue-gray-100  p-4">
              <Typography
                color="black"
                className="font-semibold text-[1rem] leading-none opacity-70"
              >
                {head}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {TABLE_ROWS.map(({ invoice_id, recipient, amount, date, status }, index) => {
          const isLast = index === TABLE_ROWS.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={invoice_id} className='text-center'>
              <td className={classes}>
                <Typography  color="blue-gray" className="font-normal text-[.9rem]">
                  {invoice_id}
                </Typography>
              </td>
              <td className={`${classes}`}>
                <Typography  color="blue-gray" className="font-normal text-[.9rem]">
                  {recipient}
                </Typography>
              </td>
              <td className={classes}>
                <Typography  color="blue-gray" className="font-normal text-[.9rem]">
                  {date}
                </Typography>
              </td>
              <td className={classes}>
                <Typography  color="blue-gray" className="font-normal text-[.9rem]">
                  {amount}
                </Typography>
              </td>
              <td className={`${classes} `}>
                <Typography
                 style={{
                    backgroundColor: status == "Paid" ? "#c4ecec" : "#fcd1d3",
                    color: status == "Paid"? "#4dcdc4" : "#ff6a6b"
                }}
                 className="font-semibold shadow-sm mx-auto xl:w-[50%]  rounded-md  px-6 text-[.8rem] py-2 text-center ">
                {status}
                </Typography>
               
              </td>
            </tr>
          );
        })}

      </tbody>
    </table>
      <tfoot className='flex items-start md:items-center flex-col-reverse lg:flex-row  my-5 md:justify-between'>
        <div>
            <h3 className='text-[.8rem] font-normal'>Showing 06 from 50 data</h3>
        </div>
        <TablePagination />
      </tfoot>
  </Card>
  )
}

export default TableSummary