const user = {
  name: 'Ana',
  id: 0,
  boolean: true,
};

const message = 'hello';

message();

type User = {
  name?: string;
  id: number | string;
  fn?: () => void;
};

const user2: User = {
  name: 'test',
  id: 2,
};

const isString = typeof user2.id === 'string';

const user3: typeof user = {
  name: 'test',
  id: 2,
};

type Dev = {
  name: string;
  nickname: string;
  isMental: boolean;
  age: number;
};

const devAge: Partial<Dev> = { age: 5, name: 'st' };

type Dev2 = {
  name?: string;
  nickname?: string;
  isMental?: boolean;
  age?: number;
} & { gender: string };

type Dev3 = Dev & { gender: string };

const requiredDev: Required<Dev2> = { age: 5 };

const ageAndName: Pick<Dev, 'age' | 'name'> & {gender: string} = {age: 5, name: 't', gender: 'female' }

const ageAndName2: Omit<Dev, 'nickname' | 'isMental'> = {
  age: 5,
  name: 't',
};
