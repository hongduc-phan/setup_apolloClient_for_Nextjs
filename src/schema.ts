import { makeSchema, queryType } from '@nexus/schema';

const Query = queryType({
  definition(t) {
    t.string('name', () => 'Duc  Phan');
  },
});

const types = { Query };

export const schema = makeSchema({
  types,
});
