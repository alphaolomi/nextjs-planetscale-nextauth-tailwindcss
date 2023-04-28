import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

export default async function UsersTable({ users }: { users: User[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>          
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Joined</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
         
            <TableCell>
              <Text>{user.email}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.created_at}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
