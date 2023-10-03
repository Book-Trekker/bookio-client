import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import {
  Card,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Chip,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react'
import { useState } from 'react'

const TABLE_HEAD = ['Books', 'Status', 'Date', 'Action']

const TABLE_ROWS = [
  {
    img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
    name: 'Book 1',
    price: '$20',
    online: true,
    date: '23/04/18',
  },
  {
    img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
    name: 'Book 2',
    price: '$25',
    online: false,
    date: '23/04/18',
  },
  {
    img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg',
    name: 'Book 3',
    price: '$30',
    online: false,
    date: '19/09/17',
  },
  {
    img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg',
    name: 'Book 4',
    price: '$15',
    online: true,
    date: '24/12/08',
  },
  {
    img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg',
    name: 'Book 5',
    price: '$18',
    online: false,
    date: '04/10/21',
  },
]

export function ManageProductTable() {
  const [statusValue, setStatusValue] = useState('')
  console.log(statusValue)

  return (
    <Card className='h-full w-full'>
      <CardBody className='overflow-scroll px-0'>
        <table className='mt-4 w-full min-w-max table-auto text-left'>
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className='cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50'
                >
                  <Menu
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                  >
                    <MenuHandler>
                      <Button className='bg-transparent text-black shadow-none w-full h-full hover:shadow-none'>
                        {head}
                      </Button>
                    </MenuHandler>
                    {index === 1 && (
                      <MenuList className='bg-[#ECEFF1]'>
                        <MenuItem
                          onClick={() => setStatusValue('all')}
                          className='text-gray font-bold mb-[1px]'
                        >
                          All
                        </MenuItem>
                        <MenuItem
                          onClick={() => setStatusValue('inStock')}
                          className='text-gray font-bold mb-[1px]'
                        >
                          In Stock
                        </MenuItem>
                        <MenuItem
                          onClick={() => setStatusValue('outOfStock')}
                          className='text-gray font-bold mb-[1px]'
                        >
                          Out Of Stock
                        </MenuItem>
                      </MenuList>
                    )}
                  </Menu>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ img, name, price, online, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1
              const classes = isLast
                ? 'p-4'
                : 'p-4 border-b border-blue-gray-50'

              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className='flex items-center gap-3'>
                      <Avatar src={img} alt={name} size='sm' />
                      <div className='flex flex-col'>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                        >
                          {name}
                        </Typography>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal opacity-70'
                        >
                          {price}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className='w-max'>
                      <Chip
                        variant='ghost'
                        size='sm'
                        value={online ? 'In Stock' : 'Out Of Stock'}
                        color={online ? 'green' : 'blue-gray'}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal'
                    >
                      {date}
                    </Typography>
                  </td>
                  <td style={{ display: 'flex' }} className={classes}>
                    <Tooltip content='Edit User'>
                      <IconButton variant='text'>
                        <PencilIcon className='h-4 w-4' />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content='Delete User'>
                      <IconButton variant='text'>
                        <TrashIcon className='h-4 w-4' />{' '}
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className='flex items-center justify-between border-t border-blue-gray-50 p-4'>
        <Typography variant='small' color='blue-gray' className='font-normal'>
          Page 1 of 10
        </Typography>
        <div className='flex gap-2'>
          <Button variant='outlined' size='sm'>
            Previous
          </Button>
          <Button variant='outlined' size='sm'>
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
