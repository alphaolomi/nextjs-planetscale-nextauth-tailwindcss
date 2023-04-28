import 'server-only';
import { Generated, Kysely,ColumnType } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

interface User {
  id: Generated<number>;
  name: string;
  email: string;
  created_at: ColumnType<Date, string | undefined, never>

}

interface Database {
  users: User;
  // https://github.com/nextauthjs/next-auth/issues/4922
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL
  })
});
