import { Card, Typography } from '@material-tailwind/react'
import { useGetOrderQuery } from '../../../redux/features/orders/orderApiSlice'

export function OrderTable() {
  const { data: order } = useGetOrderQuery()
  console.log(order)

  const TABLE_HEAD = ['Product', 'Total']

  const TABLE_ROWS = [
    {
      product: 'Healed New Life × 1',
      total: '$100.00',
    },
    {
      product: 'Subtotal:',
      total: '$150.00',
    },
    {
      product: 'Shipping:',
      total: '$75.00',
    },
    {
      product: 'Payment method:',
      total: '$75.00',
    },
    {
      product: 'Total:',
      total: '$75.00',
    },
  ]

  return (
    <Card className='h-full w-full overflow-scroll hide-scrollbar'>
      <table className='w-full min-w-max table-auto text-left'>
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'
              >
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='font-normal text-xl leading-none opacity-70'
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ product, total }, index) => {
            const isLast = index === TABLE_ROWS.length - 1
            const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

            return (
              <tr key={product}>
                <td className={classes}>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal text-md'
                  >
                    {product}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal text-md text-gray'
                  >
                    {total}
                  </Typography>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Card>
  )
}
