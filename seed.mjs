import { sql } from '@vercel/postgres';

process.env.POSTGRES_URL = "postgres://default:6WGdejaXoxq8@ep-lively-night-777016-pooler.ap-southeast-1.postgres.vercel-storage.com/verceldb"

console.log('Running seed.ts...');
(async () => {

  // Drop tables
  console.log('Dropping tables...');
  await sql`
DROP TABLE IF EXISTS members
`;


  console.log('Creating tables...');
  await sql`
CREATE TABLE members (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NULL
)
`;

  console.log('Inserting data...');
  await sql`
INSERT INTO members
  (username, name, email, password)
VALUES
  ('john', 'John Doe', '', 'password'),
  ('jane', 'Jane Doe', '', 'password')
`;

})().catch((err) => {
  console.log('Error while seeding');
  console.error(err);
  process.exit(1);
}).finally(() => {
  console.log('Closing connection...');
  process.exit()
});
