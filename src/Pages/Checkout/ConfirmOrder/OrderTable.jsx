import { Card, Typography } from '@material-tailwind/react'

export function OrderTable({ totalBookPrice, allBookNames }) {
  const TABLE_HEAD = ['Product', 'Total']

  const TABLE_ROWS = [
    {
      product: allBookNames?.map((d) => <p className='py-1'>{d?.name},</p>),
      total:
        typeof totalBookPrice === 'number'
          ? `$${totalBookPrice.toFixed(2)}`
          : undefined,
    },
    {
      product: 'Subtotal:',
      total:
        typeof totalBookPrice === 'number'
          ? `$${totalBookPrice.toFixed(2)}`
          : undefined,
    },
    {
      product: 'Shipping:',
      total: '$5',
    },
    {
      product: 'Payment method:',
      total: 'Cash On Delivery',
    },
    {
      product: 'Total:',
      total:
        typeof totalBookPrice === 'number'
          ? `$${(totalBookPrice + 5).toFixed(2)}`
          : undefined,
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
                    className='font-normal text-md whitespace-normal'
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
