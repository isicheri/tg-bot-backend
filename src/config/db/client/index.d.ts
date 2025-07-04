/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Team
 *
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>;
/**
 * Model TeamMember
 *
 */
export type TeamMember = $Result.DefaultSelection<Prisma.$TeamMemberPayload>;
/**
 * Model Bot
 *
 */
export type Bot = $Result.DefaultSelection<Prisma.$BotPayload>;
/**
 * Model Subscriber
 *
 */
export type Subscriber = $Result.DefaultSelection<Prisma.$SubscriberPayload>;
/**
 * Model Broadcast
 *
 */
export type Broadcast = $Result.DefaultSelection<Prisma.$BroadcastPayload>;
/**
 * Model Feedback
 *
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const TeamMemberRole: {
    OWNER: 'OWNER';
    ADMIN: 'ADMIN';
    MEMBER: 'MEMBER';
  };

  export type TeamMemberRole = (typeof TeamMemberRole)[keyof typeof TeamMemberRole];
}

export type TeamMemberRole = $Enums.TeamMemberRole;

export const TeamMemberRole: typeof $Enums.TeamMemberRole;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Teams
   * const teams = await prisma.team.findMany()
   * ```
   */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TeamMembers
   * const teamMembers = await prisma.teamMember.findMany()
   * ```
   */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bot`: Exposes CRUD operations for the **Bot** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Bots
   * const bots = await prisma.bot.findMany()
   * ```
   */
  get bot(): Prisma.BotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriber`: Exposes CRUD operations for the **Subscriber** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Subscribers
   * const subscribers = await prisma.subscriber.findMany()
   * ```
   */
  get subscriber(): Prisma.SubscriberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.broadcast`: Exposes CRUD operations for the **Broadcast** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Broadcasts
   * const broadcasts = await prisma.broadcast.findMany()
   * ```
   */
  get broadcast(): Prisma.BroadcastDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Feedbacks
   * const feedbacks = await prisma.feedback.findMany()
   * ```
   */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
    ReturnType<T>
  >;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
    k: infer I
  ) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> =
    IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
    T,
    MaybeTupleToUnion<K>
  >;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Team: 'Team';
    TeamMember: 'TeamMember';
    Bot: 'Bot';
    Subscriber: 'Subscriber';
    Broadcast: 'Broadcast';
    Feedback: 'Feedback';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'user' | 'team' | 'teamMember' | 'bot' | 'subscriber' | 'broadcast' | 'feedback';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>;
        fields: Prisma.TeamFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
          };
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
          };
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[];
          };
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
          };
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[];
          };
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
          };
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
          };
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[];
          };
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
          };
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeam>;
          };
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TeamGroupByOutputType>[];
          };
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>;
            result: $Utils.Optional<TeamCountAggregateOutputType> | number;
          };
        };
      };
      TeamMember: {
        payload: Prisma.$TeamMemberPayload<ExtArgs>;
        fields: Prisma.TeamMemberFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TeamMemberFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TeamMemberFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>;
          };
          findFirst: {
            args: Prisma.TeamMemberFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TeamMemberFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>;
          };
          findMany: {
            args: Prisma.TeamMemberFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[];
          };
          create: {
            args: Prisma.TeamMemberCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>;
          };
          createMany: {
            args: Prisma.TeamMemberCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TeamMemberCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[];
          };
          delete: {
            args: Prisma.TeamMemberDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>;
          };
          update: {
            args: Prisma.TeamMemberUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>;
          };
          deleteMany: {
            args: Prisma.TeamMemberDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TeamMemberUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TeamMemberUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[];
          };
          upsert: {
            args: Prisma.TeamMemberUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>;
          };
          aggregate: {
            args: Prisma.TeamMemberAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeamMember>;
          };
          groupBy: {
            args: Prisma.TeamMemberGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TeamMemberGroupByOutputType>[];
          };
          count: {
            args: Prisma.TeamMemberCountArgs<ExtArgs>;
            result: $Utils.Optional<TeamMemberCountAggregateOutputType> | number;
          };
        };
      };
      Bot: {
        payload: Prisma.$BotPayload<ExtArgs>;
        fields: Prisma.BotFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BotFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BotPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BotFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BotPayload>;
          };
          findFirst: {
            args: Prisma.BotFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BotPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BotFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BotPayload>;
          };
          findMany: {
            args: Prisma.BotFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BotPayload>[];
          };
          create: {
            args: Prisma.BotCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BotPayload>;
          };
          createMany: {
            args: Prisma.BotCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BotCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BotPayload>[];
          };
          delete: {
            args: Prisma.BotDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BotPayload>;
          };
          update: {
            args: Prisma.BotUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BotPayload>;
          };
          deleteMany: {
            args: Prisma.BotDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BotUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BotUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BotPayload>[];
          };
          upsert: {
            args: Prisma.BotUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BotPayload>;
          };
          aggregate: {
            args: Prisma.BotAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBot>;
          };
          groupBy: {
            args: Prisma.BotGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BotGroupByOutputType>[];
          };
          count: {
            args: Prisma.BotCountArgs<ExtArgs>;
            result: $Utils.Optional<BotCountAggregateOutputType> | number;
          };
        };
      };
      Subscriber: {
        payload: Prisma.$SubscriberPayload<ExtArgs>;
        fields: Prisma.SubscriberFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SubscriberFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SubscriberFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>;
          };
          findFirst: {
            args: Prisma.SubscriberFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SubscriberFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>;
          };
          findMany: {
            args: Prisma.SubscriberFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>[];
          };
          create: {
            args: Prisma.SubscriberCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>;
          };
          createMany: {
            args: Prisma.SubscriberCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SubscriberCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>[];
          };
          delete: {
            args: Prisma.SubscriberDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>;
          };
          update: {
            args: Prisma.SubscriberUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>;
          };
          deleteMany: {
            args: Prisma.SubscriberDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SubscriberUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SubscriberUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>[];
          };
          upsert: {
            args: Prisma.SubscriberUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>;
          };
          aggregate: {
            args: Prisma.SubscriberAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSubscriber>;
          };
          groupBy: {
            args: Prisma.SubscriberGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SubscriberGroupByOutputType>[];
          };
          count: {
            args: Prisma.SubscriberCountArgs<ExtArgs>;
            result: $Utils.Optional<SubscriberCountAggregateOutputType> | number;
          };
        };
      };
      Broadcast: {
        payload: Prisma.$BroadcastPayload<ExtArgs>;
        fields: Prisma.BroadcastFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BroadcastFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BroadcastPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BroadcastFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BroadcastPayload>;
          };
          findFirst: {
            args: Prisma.BroadcastFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BroadcastPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BroadcastFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BroadcastPayload>;
          };
          findMany: {
            args: Prisma.BroadcastFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BroadcastPayload>[];
          };
          create: {
            args: Prisma.BroadcastCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BroadcastPayload>;
          };
          createMany: {
            args: Prisma.BroadcastCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BroadcastCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BroadcastPayload>[];
          };
          delete: {
            args: Prisma.BroadcastDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BroadcastPayload>;
          };
          update: {
            args: Prisma.BroadcastUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BroadcastPayload>;
          };
          deleteMany: {
            args: Prisma.BroadcastDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BroadcastUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BroadcastUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BroadcastPayload>[];
          };
          upsert: {
            args: Prisma.BroadcastUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BroadcastPayload>;
          };
          aggregate: {
            args: Prisma.BroadcastAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBroadcast>;
          };
          groupBy: {
            args: Prisma.BroadcastGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BroadcastGroupByOutputType>[];
          };
          count: {
            args: Prisma.BroadcastCountArgs<ExtArgs>;
            result: $Utils.Optional<BroadcastCountAggregateOutputType> | number;
          };
        };
      };
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>;
        fields: Prisma.FeedbackFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>;
          };
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>;
          };
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[];
          };
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>;
          };
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[];
          };
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>;
          };
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>;
          };
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[];
          };
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>;
          };
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFeedback>;
          };
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FeedbackGroupByOutputType>[];
          };
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>;
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    team?: TeamOmit;
    teamMember?: TeamMemberOmit;
    bot?: BotOmit;
    subscriber?: SubscriberOmit;
    broadcast?: BroadcastOmit;
    feedback?: FeedbackOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bot: number;
    feedback: number;
    teams: number;
    teamsOwned: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    bot?: boolean | UserCountOutputTypeCountBotArgs;
    feedback?: boolean | UserCountOutputTypeCountFeedbackArgs;
    teams?: boolean | UserCountOutputTypeCountTeamsArgs;
    teamsOwned?: boolean | UserCountOutputTypeCountTeamsOwnedArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBotArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BotWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbackArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FeedbackWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TeamMemberWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamsOwnedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TeamWhereInput;
  };

  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    members: number;
    bots: number;
  };

  export type TeamCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    members?: boolean | TeamCountOutputTypeCountMembersArgs;
    bots?: boolean | TeamCountOutputTypeCountBotsArgs;
  };

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TeamMemberWhereInput;
  };

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountBotsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BotWhereInput;
  };

  /**
   * Count Type BotCountOutputType
   */

  export type BotCountOutputType = {
    subscribers: number;
    broadcasts: number;
  };

  export type BotCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    subscribers?: boolean | BotCountOutputTypeCountSubscribersArgs;
    broadcasts?: boolean | BotCountOutputTypeCountBroadcastsArgs;
  };

  // Custom InputTypes
  /**
   * BotCountOutputType without action
   */
  export type BotCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BotCountOutputType
     */
    select?: BotCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * BotCountOutputType without action
   */
  export type BotCountOutputTypeCountSubscribersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubscriberWhereInput;
  };

  /**
   * BotCountOutputType without action
   */
  export type BotCountOutputTypeCountBroadcastsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BroadcastWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    username: string | null;
    password: string | null;
    profileImg: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    username: string | null;
    password: string | null;
    profileImg: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    username: number;
    password: number;
    profileImg: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    profileImg?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    profileImg?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    profileImg?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: UserWhereInput;
      orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[];
      by: UserScalarFieldEnum[] | UserScalarFieldEnum;
      having?: UserScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: UserCountAggregateInputType | true;
      _min?: UserMinAggregateInputType;
      _max?: UserMaxAggregateInputType;
    };

  export type UserGroupByOutputType = {
    id: string;
    username: string;
    password: string;
    profileImg: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        username?: boolean;
        password?: boolean;
        profileImg?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        bot?: boolean | User$botArgs<ExtArgs>;
        feedback?: boolean | User$feedbackArgs<ExtArgs>;
        teams?: boolean | User$teamsArgs<ExtArgs>;
        teamsOwned?: boolean | User$teamsOwnedArgs<ExtArgs>;
        _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['user']
    >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      password?: boolean;
      profileImg?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      password?: boolean;
      profileImg?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    username?: boolean;
    password?: boolean;
    profileImg?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'username' | 'password' | 'profileImg' | 'createdAt' | 'updatedAt',
      ExtArgs['result']['user']
    >;
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bot?: boolean | User$botArgs<ExtArgs>;
    feedback?: boolean | User$feedbackArgs<ExtArgs>;
    teams?: boolean | User$teamsArgs<ExtArgs>;
    teamsOwned?: boolean | User$teamsOwnedArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'User';
    objects: {
      bot: Prisma.$BotPayload<ExtArgs>[];
      feedback: Prisma.$FeedbackPayload<ExtArgs>[];
      teams: Prisma.$TeamMemberPayload<ExtArgs>[];
      teamsOwned: Prisma.$TeamPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        username: string;
        password: string;
        profileImg: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<
    Prisma.$UserPayload,
    S
  >;

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    UserFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User']; meta: { name: 'User' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    bot<T extends User$botArgs<ExtArgs> = {}>(
      args?: Subset<T, User$botArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    feedback<T extends User$feedbackArgs<ExtArgs> = {}>(
      args?: Subset<T, User$feedbackArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    teams<T extends User$teamsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$teamsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    teamsOwned<T extends User$teamsOwnedArgs<ExtArgs> = {}>(
      args?: Subset<T, User$teamsOwnedArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly username: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly profileImg: FieldRef<'User', 'String'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the User
       */
      omit?: UserOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserInclude<ExtArgs> | null;
      /**
       * Filter, which Users to fetch.
       */
      where?: UserWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Users to fetch.
       */
      orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Users.
       */
      cursor?: UserWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Users from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Users.
       */
      skip?: number;
      distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
    };

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.bot
   */
  export type User$botArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bot
     */
    select?: BotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bot
     */
    omit?: BotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotInclude<ExtArgs> | null;
    where?: BotWhereInput;
    orderBy?: BotOrderByWithRelationInput | BotOrderByWithRelationInput[];
    cursor?: BotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BotScalarFieldEnum | BotScalarFieldEnum[];
  };

  /**
   * User.feedback
   */
  export type User$feedbackArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    where?: FeedbackWhereInput;
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[];
    cursor?: FeedbackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[];
  };

  /**
   * User.teams
   */
  export type User$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null;
    where?: TeamMemberWhereInput;
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[];
    cursor?: TeamMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[];
  };

  /**
   * User.teamsOwned
   */
  export type User$teamsOwnedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    where?: TeamWhereInput;
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[];
    cursor?: TeamWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the User
       */
      omit?: UserOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserInclude<ExtArgs> | null;
    };

  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  export type TeamMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    ownerId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type TeamMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    ownerId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type TeamCountAggregateOutputType = {
    id: number;
    name: number;
    ownerId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type TeamMinAggregateInputType = {
    id?: true;
    name?: true;
    ownerId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type TeamMaxAggregateInputType = {
    id?: true;
    name?: true;
    ownerId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type TeamCountAggregateInputType = {
    id?: true;
    name?: true;
    ownerId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type TeamAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Teams
     **/
    _count?: true | TeamCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TeamMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TeamMaxAggregateInputType;
  };

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
    [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>;
  };

  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: TeamWhereInput;
      orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[];
      by: TeamScalarFieldEnum[] | TeamScalarFieldEnum;
      having?: TeamScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: TeamCountAggregateInputType | true;
      _min?: TeamMinAggregateInputType;
      _max?: TeamMaxAggregateInputType;
    };

  export type TeamGroupByOutputType = {
    id: string;
    name: string;
    ownerId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TeamGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
          : GetScalarType<T[P], TeamGroupByOutputType[P]>;
      }
    >
  >;

  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        ownerId?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        owner?: boolean | UserDefaultArgs<ExtArgs>;
        members?: boolean | Team$membersArgs<ExtArgs>;
        bots?: boolean | Team$botsArgs<ExtArgs>;
        _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['team']
    >;

  export type TeamSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      ownerId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      owner?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['team']
  >;

  export type TeamSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      ownerId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      owner?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['team']
  >;

  export type TeamSelectScalar = {
    id?: boolean;
    name?: boolean;
    ownerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'name' | 'ownerId' | 'createdAt' | 'updatedAt',
      ExtArgs['result']['team']
    >;
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>;
    members?: boolean | Team$membersArgs<ExtArgs>;
    bots?: boolean | Team$botsArgs<ExtArgs>;
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type TeamIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    owner?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type TeamIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    owner?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Team';
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>;
      members: Prisma.$TeamMemberPayload<ExtArgs>[];
      bots: Prisma.$BotPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        ownerId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['team']
    >;
    composites: {};
  };

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<
    Prisma.$TeamPayload,
    S
  >;

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    TeamFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: TeamCountAggregateInputType | true;
  };

  export interface TeamDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team']; meta: { name: 'Team' } };
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(
      args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>
    ): Prisma__TeamClient<
      $Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TeamClient<
      $Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(
      args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>
    ): Prisma__TeamClient<
      $Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TeamClient<
      $Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     *
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TeamFindManyArgs>(
      args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     *
     */
    create<T extends TeamCreateArgs>(
      args: SelectSubset<T, TeamCreateArgs<ExtArgs>>
    ): Prisma__TeamClient<
      $Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TeamCreateManyArgs>(
      args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     *
     */
    delete<T extends TeamDeleteArgs>(
      args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>
    ): Prisma__TeamClient<
      $Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TeamUpdateArgs>(
      args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>
    ): Prisma__TeamClient<
      $Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TeamDeleteManyArgs>(
      args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TeamUpdateManyArgs>(
      args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(
      args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>
    ): Prisma__TeamClient<
      $Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
     **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TeamAggregateArgs>(
      args: Subset<T, TeamAggregateArgs>
    ): Prisma.PrismaPromise<GetTeamAggregateType<T>>;

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Team model
     */
    readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    members<T extends Team$membersArgs<ExtArgs> = {}>(
      args?: Subset<T, Team$membersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    bots<T extends Team$botsArgs<ExtArgs> = {}>(
      args?: Subset<T, Team$botsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<'Team', 'String'>;
    readonly name: FieldRef<'Team', 'String'>;
    readonly ownerId: FieldRef<'Team', 'String'>;
    readonly createdAt: FieldRef<'Team', 'DateTime'>;
    readonly updatedAt: FieldRef<'Team', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput;
  };

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput;
  };

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Team
       */
      select?: TeamSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Team
       */
      omit?: TeamOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TeamInclude<ExtArgs> | null;
      /**
       * Filter, which Teams to fetch.
       */
      where?: TeamWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Teams to fetch.
       */
      orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Teams.
       */
      cursor?: TeamWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Teams from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Teams.
       */
      skip?: number;
      distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
    };

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>;
  };

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>;
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput;
  };

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>;
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput;
    /**
     * Limit how many Teams to update.
     */
    limit?: number;
  };

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>;
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput;
    /**
     * Limit how many Teams to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput;
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>;
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>;
  };

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput;
  };

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput;
    /**
     * Limit how many Teams to delete.
     */
    limit?: number;
  };

  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the TeamMember
       */
      select?: TeamMemberSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TeamMember
       */
      omit?: TeamMemberOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TeamMemberInclude<ExtArgs> | null;
      where?: TeamMemberWhereInput;
      orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[];
      cursor?: TeamMemberWhereUniqueInput;
      take?: number;
      skip?: number;
      distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[];
    };

  /**
   * Team.bots
   */
  export type Team$botsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bot
     */
    select?: BotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bot
     */
    omit?: BotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotInclude<ExtArgs> | null;
    where?: BotWhereInput;
    orderBy?: BotOrderByWithRelationInput | BotOrderByWithRelationInput[];
    cursor?: BotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BotScalarFieldEnum | BotScalarFieldEnum[];
  };

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Team
       */
      select?: TeamSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Team
       */
      omit?: TeamOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TeamInclude<ExtArgs> | null;
    };

  /**
   * Model TeamMember
   */

  export type AggregateTeamMember = {
    _count: TeamMemberCountAggregateOutputType | null;
    _min: TeamMemberMinAggregateOutputType | null;
    _max: TeamMemberMaxAggregateOutputType | null;
  };

  export type TeamMemberMinAggregateOutputType = {
    id: string | null;
    teamId: string | null;
    userId: string | null;
    role: $Enums.TeamMemberRole | null;
  };

  export type TeamMemberMaxAggregateOutputType = {
    id: string | null;
    teamId: string | null;
    userId: string | null;
    role: $Enums.TeamMemberRole | null;
  };

  export type TeamMemberCountAggregateOutputType = {
    id: number;
    teamId: number;
    userId: number;
    role: number;
    _all: number;
  };

  export type TeamMemberMinAggregateInputType = {
    id?: true;
    teamId?: true;
    userId?: true;
    role?: true;
  };

  export type TeamMemberMaxAggregateInputType = {
    id?: true;
    teamId?: true;
    userId?: true;
    role?: true;
  };

  export type TeamMemberCountAggregateInputType = {
    id?: true;
    teamId?: true;
    userId?: true;
    role?: true;
    _all?: true;
  };

  export type TeamMemberAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeamMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TeamMembers
     **/
    _count?: true | TeamMemberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TeamMemberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TeamMemberMaxAggregateInputType;
  };

  export type GetTeamMemberAggregateType<T extends TeamMemberAggregateArgs> = {
    [P in keyof T & keyof AggregateTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMember[P]>
      : GetScalarType<T[P], AggregateTeamMember[P]>;
  };

  export type TeamMemberGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TeamMemberWhereInput;
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[];
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum;
    having?: TeamMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeamMemberCountAggregateInputType | true;
    _min?: TeamMemberMinAggregateInputType;
    _max?: TeamMemberMaxAggregateInputType;
  };

  export type TeamMemberGroupByOutputType = {
    id: string;
    teamId: string;
    userId: string;
    role: $Enums.TeamMemberRole;
    _count: TeamMemberCountAggregateOutputType | null;
    _min: TeamMemberMinAggregateOutputType | null;
    _max: TeamMemberMaxAggregateOutputType | null;
  };

  type GetTeamMemberGroupByPayload<T extends TeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMemberGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TeamMemberGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
          : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>;
      }
    >
  >;

  export type TeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        teamId?: boolean;
        userId?: boolean;
        role?: boolean;
        team?: boolean | TeamDefaultArgs<ExtArgs>;
        user?: boolean | UserDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['teamMember']
    >;

  export type TeamMemberSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      teamId?: boolean;
      userId?: boolean;
      role?: boolean;
      team?: boolean | TeamDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['teamMember']
  >;

  export type TeamMemberSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      teamId?: boolean;
      userId?: boolean;
      role?: boolean;
      team?: boolean | TeamDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['teamMember']
  >;

  export type TeamMemberSelectScalar = {
    id?: boolean;
    teamId?: boolean;
    userId?: boolean;
    role?: boolean;
  };

  export type TeamMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'teamId' | 'userId' | 'role', ExtArgs['result']['teamMember']>;
  export type TeamMemberInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    team?: boolean | TeamDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type TeamMemberIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    team?: boolean | TeamDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type TeamMemberIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    team?: boolean | TeamDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $TeamMemberPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'TeamMember';
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        teamId: string;
        userId: string;
        role: $Enums.TeamMemberRole;
      },
      ExtArgs['result']['teamMember']
    >;
    composites: {};
  };

  type TeamMemberGetPayload<S extends boolean | null | undefined | TeamMemberDefaultArgs> =
    $Result.GetResult<Prisma.$TeamMemberPayload, S>;

  type TeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamMemberCountAggregateInputType | true;
    };

  export interface TeamMemberDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['TeamMember'];
      meta: { name: 'TeamMember' };
    };
    /**
     * Find zero or one TeamMember that matches the filter.
     * @param {TeamMemberFindUniqueArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMemberFindUniqueArgs>(
      args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>
    ): Prisma__TeamMemberClient<
      $Result.GetResult<
        Prisma.$TeamMemberPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one TeamMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamMemberFindUniqueOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TeamMemberClient<
      $Result.GetResult<
        Prisma.$TeamMemberPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMemberFindFirstArgs>(
      args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>
    ): Prisma__TeamMemberClient<
      $Result.GetResult<
        Prisma.$TeamMemberPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TeamMemberClient<
      $Result.GetResult<
        Prisma.$TeamMemberPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMember.findMany()
     *
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMember.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TeamMemberFindManyArgs>(
      args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a TeamMember.
     * @param {TeamMemberCreateArgs} args - Arguments to create a TeamMember.
     * @example
     * // Create one TeamMember
     * const TeamMember = await prisma.teamMember.create({
     *   data: {
     *     // ... data to create a TeamMember
     *   }
     * })
     *
     */
    create<T extends TeamMemberCreateArgs>(
      args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>
    ): Prisma__TeamMemberClient<
      $Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many TeamMembers.
     * @param {TeamMemberCreateManyArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TeamMemberCreateManyArgs>(
      args?: SelectSubset<T, TeamMemberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many TeamMembers and returns the data saved in the database.
     * @param {TeamMemberCreateManyAndReturnArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TeamMemberCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TeamMemberCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TeamMemberPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a TeamMember.
     * @param {TeamMemberDeleteArgs} args - Arguments to delete one TeamMember.
     * @example
     * // Delete one TeamMember
     * const TeamMember = await prisma.teamMember.delete({
     *   where: {
     *     // ... filter to delete one TeamMember
     *   }
     * })
     *
     */
    delete<T extends TeamMemberDeleteArgs>(
      args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>
    ): Prisma__TeamMemberClient<
      $Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one TeamMember.
     * @param {TeamMemberUpdateArgs} args - Arguments to update one TeamMember.
     * @example
     * // Update one TeamMember
     * const teamMember = await prisma.teamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TeamMemberUpdateArgs>(
      args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>
    ): Prisma__TeamMemberClient<
      $Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMemberDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TeamMemberDeleteManyArgs>(
      args?: SelectSubset<T, TeamMemberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TeamMemberUpdateManyArgs>(
      args: SelectSubset<T, TeamMemberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TeamMembers and returns the data updated in the database.
     * @param {TeamMemberUpdateManyAndReturnArgs} args - Arguments to update many TeamMembers.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TeamMemberUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TeamMemberUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TeamMemberPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one TeamMember.
     * @param {TeamMemberUpsertArgs} args - Arguments to update or create a TeamMember.
     * @example
     * // Update or create a TeamMember
     * const teamMember = await prisma.teamMember.upsert({
     *   create: {
     *     // ... data to create a TeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMember we want to update
     *   }
     * })
     */
    upsert<T extends TeamMemberUpsertArgs>(
      args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>
    ): Prisma__TeamMemberClient<
      $Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMember.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
     **/
    count<T extends TeamMemberCountArgs>(
      args?: Subset<T, TeamMemberCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMemberCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TeamMemberAggregateArgs>(
      args: Subset<T, TeamMemberAggregateArgs>
    ): Prisma.PrismaPromise<GetTeamMemberAggregateType<T>>;

    /**
     * Group by TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TeamMemberGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: TeamMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TeamMemberGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TeamMember model
     */
    readonly fields: TeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMemberClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TeamDefaultArgs<ExtArgs>>
    ): Prisma__TeamClient<
      | $Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the TeamMember model
   */
  interface TeamMemberFieldRefs {
    readonly id: FieldRef<'TeamMember', 'String'>;
    readonly teamId: FieldRef<'TeamMember', 'String'>;
    readonly userId: FieldRef<'TeamMember', 'String'>;
    readonly role: FieldRef<'TeamMember', 'TeamMemberRole'>;
  }

  // Custom InputTypes
  /**
   * TeamMember findUnique
   */
  export type TeamMemberFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null;
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput;
  };

  /**
   * TeamMember findUniqueOrThrow
   */
  export type TeamMemberFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null;
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput;
  };

  /**
   * TeamMember findFirst
   */
  export type TeamMemberFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null;
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeamMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[];
  };

  /**
   * TeamMember findFirstOrThrow
   */
  export type TeamMemberFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null;
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeamMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[];
  };

  /**
   * TeamMember findMany
   */
  export type TeamMemberFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null;
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeamMembers.
     */
    skip?: number;
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[];
  };

  /**
   * TeamMember create
   */
  export type TeamMemberCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null;
    /**
     * The data needed to create a TeamMember.
     */
    data: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>;
  };

  /**
   * TeamMember createMany
   */
  export type TeamMemberCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TeamMember createManyAndReturn
   */
  export type TeamMemberCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null;
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TeamMember update
   */
  export type TeamMemberUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null;
    /**
     * The data needed to update a TeamMember.
     */
    data: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>;
    /**
     * Choose, which TeamMember to update.
     */
    where: TeamMemberWhereUniqueInput;
  };

  /**
   * TeamMember updateMany
   */
  export type TeamMemberUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>;
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput;
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number;
  };

  /**
   * TeamMember updateManyAndReturn
   */
  export type TeamMemberUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null;
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>;
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput;
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TeamMember upsert
   */
  export type TeamMemberUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null;
    /**
     * The filter to search for the TeamMember to update in case it exists.
     */
    where: TeamMemberWhereUniqueInput;
    /**
     * In case the TeamMember found by the `where` argument doesn't exist, create a new TeamMember with this data.
     */
    create: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>;
    /**
     * In case the TeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>;
  };

  /**
   * TeamMember delete
   */
  export type TeamMemberDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null;
    /**
     * Filter which TeamMember to delete.
     */
    where: TeamMemberWhereUniqueInput;
  };

  /**
   * TeamMember deleteMany
   */
  export type TeamMemberDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMemberWhereInput;
    /**
     * Limit how many TeamMembers to delete.
     */
    limit?: number;
  };

  /**
   * TeamMember without action
   */
  export type TeamMemberDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null;
  };

  /**
   * Model Bot
   */

  export type AggregateBot = {
    _count: BotCountAggregateOutputType | null;
    _min: BotMinAggregateOutputType | null;
    _max: BotMaxAggregateOutputType | null;
  };

  export type BotMinAggregateOutputType = {
    id: string | null;
    token: string | null;
    name: string | null;
    username: string | null;
    userId: string | null;
    teamId: string | null;
    createdAt: Date | null;
  };

  export type BotMaxAggregateOutputType = {
    id: string | null;
    token: string | null;
    name: string | null;
    username: string | null;
    userId: string | null;
    teamId: string | null;
    createdAt: Date | null;
  };

  export type BotCountAggregateOutputType = {
    id: number;
    token: number;
    name: number;
    username: number;
    userId: number;
    teamId: number;
    logicFlow: number;
    createdAt: number;
    _all: number;
  };

  export type BotMinAggregateInputType = {
    id?: true;
    token?: true;
    name?: true;
    username?: true;
    userId?: true;
    teamId?: true;
    createdAt?: true;
  };

  export type BotMaxAggregateInputType = {
    id?: true;
    token?: true;
    name?: true;
    username?: true;
    userId?: true;
    teamId?: true;
    createdAt?: true;
  };

  export type BotCountAggregateInputType = {
    id?: true;
    token?: true;
    name?: true;
    username?: true;
    userId?: true;
    teamId?: true;
    logicFlow?: true;
    createdAt?: true;
    _all?: true;
  };

  export type BotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Filter which Bot to aggregate.
       */
      where?: BotWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Bots to fetch.
       */
      orderBy?: BotOrderByWithRelationInput | BotOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the start position
       */
      cursor?: BotWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Bots from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Bots.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Count returned Bots
       **/
      _count?: true | BotCountAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the minimum value
       **/
      _min?: BotMinAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the maximum value
       **/
      _max?: BotMaxAggregateInputType;
    };

  export type GetBotAggregateType<T extends BotAggregateArgs> = {
    [P in keyof T & keyof AggregateBot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBot[P]>
      : GetScalarType<T[P], AggregateBot[P]>;
  };

  export type BotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BotWhereInput;
    orderBy?: BotOrderByWithAggregationInput | BotOrderByWithAggregationInput[];
    by: BotScalarFieldEnum[] | BotScalarFieldEnum;
    having?: BotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BotCountAggregateInputType | true;
    _min?: BotMinAggregateInputType;
    _max?: BotMaxAggregateInputType;
  };

  export type BotGroupByOutputType = {
    id: string;
    token: string;
    name: string;
    username: string;
    userId: string | null;
    teamId: string | null;
    logicFlow: JsonValue | null;
    createdAt: Date;
    _count: BotCountAggregateOutputType | null;
    _min: BotMinAggregateOutputType | null;
    _max: BotMaxAggregateOutputType | null;
  };

  type GetBotGroupByPayload<T extends BotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BotGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BotGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BotGroupByOutputType[P]>
          : GetScalarType<T[P], BotGroupByOutputType[P]>;
      }
    >
  >;

  export type BotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        token?: boolean;
        name?: boolean;
        username?: boolean;
        userId?: boolean;
        teamId?: boolean;
        logicFlow?: boolean;
        createdAt?: boolean;
        user?: boolean | Bot$userArgs<ExtArgs>;
        team?: boolean | Bot$teamArgs<ExtArgs>;
        subscribers?: boolean | Bot$subscribersArgs<ExtArgs>;
        broadcasts?: boolean | Bot$broadcastsArgs<ExtArgs>;
        _count?: boolean | BotCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['bot']
    >;

  export type BotSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      token?: boolean;
      name?: boolean;
      username?: boolean;
      userId?: boolean;
      teamId?: boolean;
      logicFlow?: boolean;
      createdAt?: boolean;
      user?: boolean | Bot$userArgs<ExtArgs>;
      team?: boolean | Bot$teamArgs<ExtArgs>;
    },
    ExtArgs['result']['bot']
  >;

  export type BotSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      token?: boolean;
      name?: boolean;
      username?: boolean;
      userId?: boolean;
      teamId?: boolean;
      logicFlow?: boolean;
      createdAt?: boolean;
      user?: boolean | Bot$userArgs<ExtArgs>;
      team?: boolean | Bot$teamArgs<ExtArgs>;
    },
    ExtArgs['result']['bot']
  >;

  export type BotSelectScalar = {
    id?: boolean;
    token?: boolean;
    name?: boolean;
    username?: boolean;
    userId?: boolean;
    teamId?: boolean;
    logicFlow?: boolean;
    createdAt?: boolean;
  };

  export type BotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'token' | 'name' | 'username' | 'userId' | 'teamId' | 'logicFlow' | 'createdAt',
      ExtArgs['result']['bot']
    >;
  export type BotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Bot$userArgs<ExtArgs>;
    team?: boolean | Bot$teamArgs<ExtArgs>;
    subscribers?: boolean | Bot$subscribersArgs<ExtArgs>;
    broadcasts?: boolean | Bot$broadcastsArgs<ExtArgs>;
    _count?: boolean | BotCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type BotIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | Bot$userArgs<ExtArgs>;
    team?: boolean | Bot$teamArgs<ExtArgs>;
  };
  export type BotIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | Bot$userArgs<ExtArgs>;
    team?: boolean | Bot$teamArgs<ExtArgs>;
  };

  export type $BotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Bot';
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null;
      team: Prisma.$TeamPayload<ExtArgs> | null;
      subscribers: Prisma.$SubscriberPayload<ExtArgs>[];
      broadcasts: Prisma.$BroadcastPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        token: string;
        name: string;
        username: string;
        userId: string | null;
        teamId: string | null;
        logicFlow: Prisma.JsonValue | null;
        createdAt: Date;
      },
      ExtArgs['result']['bot']
    >;
    composites: {};
  };

  type BotGetPayload<S extends boolean | null | undefined | BotDefaultArgs> = $Result.GetResult<
    Prisma.$BotPayload,
    S
  >;

  type BotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    BotFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: BotCountAggregateInputType | true;
  };

  export interface BotDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bot']; meta: { name: 'Bot' } };
    /**
     * Find zero or one Bot that matches the filter.
     * @param {BotFindUniqueArgs} args - Arguments to find a Bot
     * @example
     * // Get one Bot
     * const bot = await prisma.bot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BotFindUniqueArgs>(
      args: SelectSubset<T, BotFindUniqueArgs<ExtArgs>>
    ): Prisma__BotClient<
      $Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Bot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BotFindUniqueOrThrowArgs} args - Arguments to find a Bot
     * @example
     * // Get one Bot
     * const bot = await prisma.bot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BotFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BotFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BotClient<
      $Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Bot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotFindFirstArgs} args - Arguments to find a Bot
     * @example
     * // Get one Bot
     * const bot = await prisma.bot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BotFindFirstArgs>(
      args?: SelectSubset<T, BotFindFirstArgs<ExtArgs>>
    ): Prisma__BotClient<
      $Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Bot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotFindFirstOrThrowArgs} args - Arguments to find a Bot
     * @example
     * // Get one Bot
     * const bot = await prisma.bot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BotFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BotFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BotClient<
      $Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Bots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bots
     * const bots = await prisma.bot.findMany()
     *
     * // Get first 10 Bots
     * const bots = await prisma.bot.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const botWithIdOnly = await prisma.bot.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BotFindManyArgs>(
      args?: SelectSubset<T, BotFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Bot.
     * @param {BotCreateArgs} args - Arguments to create a Bot.
     * @example
     * // Create one Bot
     * const Bot = await prisma.bot.create({
     *   data: {
     *     // ... data to create a Bot
     *   }
     * })
     *
     */
    create<T extends BotCreateArgs>(
      args: SelectSubset<T, BotCreateArgs<ExtArgs>>
    ): Prisma__BotClient<
      $Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Bots.
     * @param {BotCreateManyArgs} args - Arguments to create many Bots.
     * @example
     * // Create many Bots
     * const bot = await prisma.bot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BotCreateManyArgs>(
      args?: SelectSubset<T, BotCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Bots and returns the data saved in the database.
     * @param {BotCreateManyAndReturnArgs} args - Arguments to create many Bots.
     * @example
     * // Create many Bots
     * const bot = await prisma.bot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Bots and only return the `id`
     * const botWithIdOnly = await prisma.bot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BotCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BotCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Bot.
     * @param {BotDeleteArgs} args - Arguments to delete one Bot.
     * @example
     * // Delete one Bot
     * const Bot = await prisma.bot.delete({
     *   where: {
     *     // ... filter to delete one Bot
     *   }
     * })
     *
     */
    delete<T extends BotDeleteArgs>(
      args: SelectSubset<T, BotDeleteArgs<ExtArgs>>
    ): Prisma__BotClient<
      $Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Bot.
     * @param {BotUpdateArgs} args - Arguments to update one Bot.
     * @example
     * // Update one Bot
     * const bot = await prisma.bot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BotUpdateArgs>(
      args: SelectSubset<T, BotUpdateArgs<ExtArgs>>
    ): Prisma__BotClient<
      $Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Bots.
     * @param {BotDeleteManyArgs} args - Arguments to filter Bots to delete.
     * @example
     * // Delete a few Bots
     * const { count } = await prisma.bot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BotDeleteManyArgs>(
      args?: SelectSubset<T, BotDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bots
     * const bot = await prisma.bot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BotUpdateManyArgs>(
      args: SelectSubset<T, BotUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bots and returns the data updated in the database.
     * @param {BotUpdateManyAndReturnArgs} args - Arguments to update many Bots.
     * @example
     * // Update many Bots
     * const bot = await prisma.bot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Bots and only return the `id`
     * const botWithIdOnly = await prisma.bot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BotUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BotUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Bot.
     * @param {BotUpsertArgs} args - Arguments to update or create a Bot.
     * @example
     * // Update or create a Bot
     * const bot = await prisma.bot.upsert({
     *   create: {
     *     // ... data to create a Bot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bot we want to update
     *   }
     * })
     */
    upsert<T extends BotUpsertArgs>(
      args: SelectSubset<T, BotUpsertArgs<ExtArgs>>
    ): Prisma__BotClient<
      $Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Bots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotCountArgs} args - Arguments to filter Bots to count.
     * @example
     * // Count the number of Bots
     * const count = await prisma.bot.count({
     *   where: {
     *     // ... the filter for the Bots we want to count
     *   }
     * })
     **/
    count<T extends BotCountArgs>(
      args?: Subset<T, BotCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BotCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Bot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BotAggregateArgs>(
      args: Subset<T, BotAggregateArgs>
    ): Prisma.PrismaPromise<GetBotAggregateType<T>>;

    /**
     * Group by Bot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends BotGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BotGroupByArgs['orderBy'] }
        : { orderBy?: BotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, BotGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetBotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Bot model
     */
    readonly fields: BotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BotClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends Bot$userArgs<ExtArgs> = {}>(
      args?: Subset<T, Bot$userArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    team<T extends Bot$teamArgs<ExtArgs> = {}>(
      args?: Subset<T, Bot$teamArgs<ExtArgs>>
    ): Prisma__TeamClient<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    subscribers<T extends Bot$subscribersArgs<ExtArgs> = {}>(
      args?: Subset<T, Bot$subscribersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    broadcasts<T extends Bot$broadcastsArgs<ExtArgs> = {}>(
      args?: Subset<T, Bot$broadcastsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$BroadcastPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Bot model
   */
  interface BotFieldRefs {
    readonly id: FieldRef<'Bot', 'String'>;
    readonly token: FieldRef<'Bot', 'String'>;
    readonly name: FieldRef<'Bot', 'String'>;
    readonly username: FieldRef<'Bot', 'String'>;
    readonly userId: FieldRef<'Bot', 'String'>;
    readonly teamId: FieldRef<'Bot', 'String'>;
    readonly logicFlow: FieldRef<'Bot', 'Json'>;
    readonly createdAt: FieldRef<'Bot', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Bot findUnique
   */
  export type BotFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Bot
     */
    select?: BotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bot
     */
    omit?: BotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotInclude<ExtArgs> | null;
    /**
     * Filter, which Bot to fetch.
     */
    where: BotWhereUniqueInput;
  };

  /**
   * Bot findUniqueOrThrow
   */
  export type BotFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Bot
     */
    select?: BotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bot
     */
    omit?: BotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotInclude<ExtArgs> | null;
    /**
     * Filter, which Bot to fetch.
     */
    where: BotWhereUniqueInput;
  };

  /**
   * Bot findFirst
   */
  export type BotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Bot
       */
      select?: BotSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Bot
       */
      omit?: BotOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: BotInclude<ExtArgs> | null;
      /**
       * Filter, which Bot to fetch.
       */
      where?: BotWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Bots to fetch.
       */
      orderBy?: BotOrderByWithRelationInput | BotOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for Bots.
       */
      cursor?: BotWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Bots from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Bots.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Bots.
       */
      distinct?: BotScalarFieldEnum | BotScalarFieldEnum[];
    };

  /**
   * Bot findFirstOrThrow
   */
  export type BotFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Bot
     */
    select?: BotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bot
     */
    omit?: BotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotInclude<ExtArgs> | null;
    /**
     * Filter, which Bot to fetch.
     */
    where?: BotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bots to fetch.
     */
    orderBy?: BotOrderByWithRelationInput | BotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Bots.
     */
    cursor?: BotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bots.
     */
    distinct?: BotScalarFieldEnum | BotScalarFieldEnum[];
  };

  /**
   * Bot findMany
   */
  export type BotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Bot
       */
      select?: BotSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Bot
       */
      omit?: BotOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: BotInclude<ExtArgs> | null;
      /**
       * Filter, which Bots to fetch.
       */
      where?: BotWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Bots to fetch.
       */
      orderBy?: BotOrderByWithRelationInput | BotOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Bots.
       */
      cursor?: BotWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Bots from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Bots.
       */
      skip?: number;
      distinct?: BotScalarFieldEnum | BotScalarFieldEnum[];
    };

  /**
   * Bot create
   */
  export type BotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bot
     */
    select?: BotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bot
     */
    omit?: BotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotInclude<ExtArgs> | null;
    /**
     * The data needed to create a Bot.
     */
    data: XOR<BotCreateInput, BotUncheckedCreateInput>;
  };

  /**
   * Bot createMany
   */
  export type BotCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Bots.
     */
    data: BotCreateManyInput | BotCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Bot createManyAndReturn
   */
  export type BotCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Bot
     */
    select?: BotSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Bot
     */
    omit?: BotOmit<ExtArgs> | null;
    /**
     * The data used to create many Bots.
     */
    data: BotCreateManyInput | BotCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Bot update
   */
  export type BotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bot
     */
    select?: BotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bot
     */
    omit?: BotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotInclude<ExtArgs> | null;
    /**
     * The data needed to update a Bot.
     */
    data: XOR<BotUpdateInput, BotUncheckedUpdateInput>;
    /**
     * Choose, which Bot to update.
     */
    where: BotWhereUniqueInput;
  };

  /**
   * Bot updateMany
   */
  export type BotUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Bots.
     */
    data: XOR<BotUpdateManyMutationInput, BotUncheckedUpdateManyInput>;
    /**
     * Filter which Bots to update
     */
    where?: BotWhereInput;
    /**
     * Limit how many Bots to update.
     */
    limit?: number;
  };

  /**
   * Bot updateManyAndReturn
   */
  export type BotUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Bot
     */
    select?: BotSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Bot
     */
    omit?: BotOmit<ExtArgs> | null;
    /**
     * The data used to update Bots.
     */
    data: XOR<BotUpdateManyMutationInput, BotUncheckedUpdateManyInput>;
    /**
     * Filter which Bots to update
     */
    where?: BotWhereInput;
    /**
     * Limit how many Bots to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Bot upsert
   */
  export type BotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bot
     */
    select?: BotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bot
     */
    omit?: BotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotInclude<ExtArgs> | null;
    /**
     * The filter to search for the Bot to update in case it exists.
     */
    where: BotWhereUniqueInput;
    /**
     * In case the Bot found by the `where` argument doesn't exist, create a new Bot with this data.
     */
    create: XOR<BotCreateInput, BotUncheckedCreateInput>;
    /**
     * In case the Bot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BotUpdateInput, BotUncheckedUpdateInput>;
  };

  /**
   * Bot delete
   */
  export type BotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bot
     */
    select?: BotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bot
     */
    omit?: BotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotInclude<ExtArgs> | null;
    /**
     * Filter which Bot to delete.
     */
    where: BotWhereUniqueInput;
  };

  /**
   * Bot deleteMany
   */
  export type BotDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Bots to delete
     */
    where?: BotWhereInput;
    /**
     * Limit how many Bots to delete.
     */
    limit?: number;
  };

  /**
   * Bot.user
   */
  export type Bot$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
  };

  /**
   * Bot.team
   */
  export type Bot$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    where?: TeamWhereInput;
  };

  /**
   * Bot.subscribers
   */
  export type Bot$subscribersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null;
    where?: SubscriberWhereInput;
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[];
    cursor?: SubscriberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[];
  };

  /**
   * Bot.broadcasts
   */
  export type Bot$broadcastsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Broadcast
     */
    select?: BroadcastSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Broadcast
     */
    omit?: BroadcastOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastInclude<ExtArgs> | null;
    where?: BroadcastWhereInput;
    orderBy?: BroadcastOrderByWithRelationInput | BroadcastOrderByWithRelationInput[];
    cursor?: BroadcastWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BroadcastScalarFieldEnum | BroadcastScalarFieldEnum[];
  };

  /**
   * Bot without action
   */
  export type BotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bot
     */
    select?: BotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bot
     */
    omit?: BotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotInclude<ExtArgs> | null;
  };

  /**
   * Model Subscriber
   */

  export type AggregateSubscriber = {
    _count: SubscriberCountAggregateOutputType | null;
    _min: SubscriberMinAggregateOutputType | null;
    _max: SubscriberMaxAggregateOutputType | null;
  };

  export type SubscriberMinAggregateOutputType = {
    id: string | null;
    chatId: string | null;
    username: string | null;
    firstName: string | null;
    lastName: string | null;
    botId: string | null;
    createdAt: Date | null;
  };

  export type SubscriberMaxAggregateOutputType = {
    id: string | null;
    chatId: string | null;
    username: string | null;
    firstName: string | null;
    lastName: string | null;
    botId: string | null;
    createdAt: Date | null;
  };

  export type SubscriberCountAggregateOutputType = {
    id: number;
    chatId: number;
    username: number;
    firstName: number;
    lastName: number;
    botId: number;
    createdAt: number;
    _all: number;
  };

  export type SubscriberMinAggregateInputType = {
    id?: true;
    chatId?: true;
    username?: true;
    firstName?: true;
    lastName?: true;
    botId?: true;
    createdAt?: true;
  };

  export type SubscriberMaxAggregateInputType = {
    id?: true;
    chatId?: true;
    username?: true;
    firstName?: true;
    lastName?: true;
    botId?: true;
    createdAt?: true;
  };

  export type SubscriberCountAggregateInputType = {
    id?: true;
    chatId?: true;
    username?: true;
    firstName?: true;
    lastName?: true;
    botId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type SubscriberAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Subscriber to aggregate.
     */
    where?: SubscriberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SubscriberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscribers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Subscribers
     **/
    _count?: true | SubscriberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubscriberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubscriberMaxAggregateInputType;
  };

  export type GetSubscriberAggregateType<T extends SubscriberAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscriber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriber[P]>
      : GetScalarType<T[P], AggregateSubscriber[P]>;
  };

  export type SubscriberGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubscriberWhereInput;
    orderBy?: SubscriberOrderByWithAggregationInput | SubscriberOrderByWithAggregationInput[];
    by: SubscriberScalarFieldEnum[] | SubscriberScalarFieldEnum;
    having?: SubscriberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubscriberCountAggregateInputType | true;
    _min?: SubscriberMinAggregateInputType;
    _max?: SubscriberMaxAggregateInputType;
  };

  export type SubscriberGroupByOutputType = {
    id: string;
    chatId: string;
    username: string | null;
    firstName: string | null;
    lastName: string | null;
    botId: string;
    createdAt: Date;
    _count: SubscriberCountAggregateOutputType | null;
    _min: SubscriberMinAggregateOutputType | null;
    _max: SubscriberMaxAggregateOutputType | null;
  };

  type GetSubscriberGroupByPayload<T extends SubscriberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriberGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SubscriberGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SubscriberGroupByOutputType[P]>
          : GetScalarType<T[P], SubscriberGroupByOutputType[P]>;
      }
    >
  >;

  export type SubscriberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        chatId?: boolean;
        username?: boolean;
        firstName?: boolean;
        lastName?: boolean;
        botId?: boolean;
        createdAt?: boolean;
        bot?: boolean | BotDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['subscriber']
    >;

  export type SubscriberSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      chatId?: boolean;
      username?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      botId?: boolean;
      createdAt?: boolean;
      bot?: boolean | BotDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['subscriber']
  >;

  export type SubscriberSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      chatId?: boolean;
      username?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      botId?: boolean;
      createdAt?: boolean;
      bot?: boolean | BotDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['subscriber']
  >;

  export type SubscriberSelectScalar = {
    id?: boolean;
    chatId?: boolean;
    username?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    botId?: boolean;
    createdAt?: boolean;
  };

  export type SubscriberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'chatId' | 'username' | 'firstName' | 'lastName' | 'botId' | 'createdAt',
      ExtArgs['result']['subscriber']
    >;
  export type SubscriberInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    bot?: boolean | BotDefaultArgs<ExtArgs>;
  };
  export type SubscriberIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    bot?: boolean | BotDefaultArgs<ExtArgs>;
  };
  export type SubscriberIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    bot?: boolean | BotDefaultArgs<ExtArgs>;
  };

  export type $SubscriberPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Subscriber';
    objects: {
      bot: Prisma.$BotPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        chatId: string;
        username: string | null;
        firstName: string | null;
        lastName: string | null;
        botId: string;
        createdAt: Date;
      },
      ExtArgs['result']['subscriber']
    >;
    composites: {};
  };

  type SubscriberGetPayload<S extends boolean | null | undefined | SubscriberDefaultArgs> =
    $Result.GetResult<Prisma.$SubscriberPayload, S>;

  type SubscriberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriberCountAggregateInputType | true;
    };

  export interface SubscriberDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Subscriber'];
      meta: { name: 'Subscriber' };
    };
    /**
     * Find zero or one Subscriber that matches the filter.
     * @param {SubscriberFindUniqueArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriberFindUniqueArgs>(
      args: SelectSubset<T, SubscriberFindUniqueArgs<ExtArgs>>
    ): Prisma__SubscriberClient<
      $Result.GetResult<
        Prisma.$SubscriberPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Subscriber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriberFindUniqueOrThrowArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriberFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SubscriberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubscriberClient<
      $Result.GetResult<
        Prisma.$SubscriberPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Subscriber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberFindFirstArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriberFindFirstArgs>(
      args?: SelectSubset<T, SubscriberFindFirstArgs<ExtArgs>>
    ): Prisma__SubscriberClient<
      $Result.GetResult<
        Prisma.$SubscriberPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Subscriber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberFindFirstOrThrowArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SubscriberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubscriberClient<
      $Result.GetResult<
        Prisma.$SubscriberPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Subscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscribers
     * const subscribers = await prisma.subscriber.findMany()
     *
     * // Get first 10 Subscribers
     * const subscribers = await prisma.subscriber.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subscriberWithIdOnly = await prisma.subscriber.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SubscriberFindManyArgs>(
      args?: SelectSubset<T, SubscriberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Subscriber.
     * @param {SubscriberCreateArgs} args - Arguments to create a Subscriber.
     * @example
     * // Create one Subscriber
     * const Subscriber = await prisma.subscriber.create({
     *   data: {
     *     // ... data to create a Subscriber
     *   }
     * })
     *
     */
    create<T extends SubscriberCreateArgs>(
      args: SelectSubset<T, SubscriberCreateArgs<ExtArgs>>
    ): Prisma__SubscriberClient<
      $Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Subscribers.
     * @param {SubscriberCreateManyArgs} args - Arguments to create many Subscribers.
     * @example
     * // Create many Subscribers
     * const subscriber = await prisma.subscriber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SubscriberCreateManyArgs>(
      args?: SelectSubset<T, SubscriberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Subscribers and returns the data saved in the database.
     * @param {SubscriberCreateManyAndReturnArgs} args - Arguments to create many Subscribers.
     * @example
     * // Create many Subscribers
     * const subscriber = await prisma.subscriber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Subscribers and only return the `id`
     * const subscriberWithIdOnly = await prisma.subscriber.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SubscriberCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SubscriberCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriberPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Subscriber.
     * @param {SubscriberDeleteArgs} args - Arguments to delete one Subscriber.
     * @example
     * // Delete one Subscriber
     * const Subscriber = await prisma.subscriber.delete({
     *   where: {
     *     // ... filter to delete one Subscriber
     *   }
     * })
     *
     */
    delete<T extends SubscriberDeleteArgs>(
      args: SelectSubset<T, SubscriberDeleteArgs<ExtArgs>>
    ): Prisma__SubscriberClient<
      $Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Subscriber.
     * @param {SubscriberUpdateArgs} args - Arguments to update one Subscriber.
     * @example
     * // Update one Subscriber
     * const subscriber = await prisma.subscriber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SubscriberUpdateArgs>(
      args: SelectSubset<T, SubscriberUpdateArgs<ExtArgs>>
    ): Prisma__SubscriberClient<
      $Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Subscribers.
     * @param {SubscriberDeleteManyArgs} args - Arguments to filter Subscribers to delete.
     * @example
     * // Delete a few Subscribers
     * const { count } = await prisma.subscriber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SubscriberDeleteManyArgs>(
      args?: SelectSubset<T, SubscriberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscribers
     * const subscriber = await prisma.subscriber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SubscriberUpdateManyArgs>(
      args: SelectSubset<T, SubscriberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subscribers and returns the data updated in the database.
     * @param {SubscriberUpdateManyAndReturnArgs} args - Arguments to update many Subscribers.
     * @example
     * // Update many Subscribers
     * const subscriber = await prisma.subscriber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Subscribers and only return the `id`
     * const subscriberWithIdOnly = await prisma.subscriber.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SubscriberUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SubscriberUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriberPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Subscriber.
     * @param {SubscriberUpsertArgs} args - Arguments to update or create a Subscriber.
     * @example
     * // Update or create a Subscriber
     * const subscriber = await prisma.subscriber.upsert({
     *   create: {
     *     // ... data to create a Subscriber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscriber we want to update
     *   }
     * })
     */
    upsert<T extends SubscriberUpsertArgs>(
      args: SelectSubset<T, SubscriberUpsertArgs<ExtArgs>>
    ): Prisma__SubscriberClient<
      $Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberCountArgs} args - Arguments to filter Subscribers to count.
     * @example
     * // Count the number of Subscribers
     * const count = await prisma.subscriber.count({
     *   where: {
     *     // ... the filter for the Subscribers we want to count
     *   }
     * })
     **/
    count<T extends SubscriberCountArgs>(
      args?: Subset<T, SubscriberCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriberCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Subscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SubscriberAggregateArgs>(
      args: Subset<T, SubscriberAggregateArgs>
    ): Prisma.PrismaPromise<GetSubscriberAggregateType<T>>;

    /**
     * Group by Subscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SubscriberGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriberGroupByArgs['orderBy'] }
        : { orderBy?: SubscriberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SubscriberGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetSubscriberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Subscriber model
     */
    readonly fields: SubscriberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscriber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriberClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    bot<T extends BotDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BotDefaultArgs<ExtArgs>>
    ): Prisma__BotClient<
      | $Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Subscriber model
   */
  interface SubscriberFieldRefs {
    readonly id: FieldRef<'Subscriber', 'String'>;
    readonly chatId: FieldRef<'Subscriber', 'String'>;
    readonly username: FieldRef<'Subscriber', 'String'>;
    readonly firstName: FieldRef<'Subscriber', 'String'>;
    readonly lastName: FieldRef<'Subscriber', 'String'>;
    readonly botId: FieldRef<'Subscriber', 'String'>;
    readonly createdAt: FieldRef<'Subscriber', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Subscriber findUnique
   */
  export type SubscriberFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null;
    /**
     * Filter, which Subscriber to fetch.
     */
    where: SubscriberWhereUniqueInput;
  };

  /**
   * Subscriber findUniqueOrThrow
   */
  export type SubscriberFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null;
    /**
     * Filter, which Subscriber to fetch.
     */
    where: SubscriberWhereUniqueInput;
  };

  /**
   * Subscriber findFirst
   */
  export type SubscriberFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null;
    /**
     * Filter, which Subscriber to fetch.
     */
    where?: SubscriberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subscribers.
     */
    cursor?: SubscriberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscribers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subscribers.
     */
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[];
  };

  /**
   * Subscriber findFirstOrThrow
   */
  export type SubscriberFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null;
    /**
     * Filter, which Subscriber to fetch.
     */
    where?: SubscriberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subscribers.
     */
    cursor?: SubscriberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscribers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subscribers.
     */
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[];
  };

  /**
   * Subscriber findMany
   */
  export type SubscriberFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null;
    /**
     * Filter, which Subscribers to fetch.
     */
    where?: SubscriberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Subscribers.
     */
    cursor?: SubscriberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscribers.
     */
    skip?: number;
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[];
  };

  /**
   * Subscriber create
   */
  export type SubscriberCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null;
    /**
     * The data needed to create a Subscriber.
     */
    data: XOR<SubscriberCreateInput, SubscriberUncheckedCreateInput>;
  };

  /**
   * Subscriber createMany
   */
  export type SubscriberCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Subscribers.
     */
    data: SubscriberCreateManyInput | SubscriberCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Subscriber createManyAndReturn
   */
  export type SubscriberCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null;
    /**
     * The data used to create many Subscribers.
     */
    data: SubscriberCreateManyInput | SubscriberCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Subscriber update
   */
  export type SubscriberUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null;
    /**
     * The data needed to update a Subscriber.
     */
    data: XOR<SubscriberUpdateInput, SubscriberUncheckedUpdateInput>;
    /**
     * Choose, which Subscriber to update.
     */
    where: SubscriberWhereUniqueInput;
  };

  /**
   * Subscriber updateMany
   */
  export type SubscriberUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Subscribers.
     */
    data: XOR<SubscriberUpdateManyMutationInput, SubscriberUncheckedUpdateManyInput>;
    /**
     * Filter which Subscribers to update
     */
    where?: SubscriberWhereInput;
    /**
     * Limit how many Subscribers to update.
     */
    limit?: number;
  };

  /**
   * Subscriber updateManyAndReturn
   */
  export type SubscriberUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null;
    /**
     * The data used to update Subscribers.
     */
    data: XOR<SubscriberUpdateManyMutationInput, SubscriberUncheckedUpdateManyInput>;
    /**
     * Filter which Subscribers to update
     */
    where?: SubscriberWhereInput;
    /**
     * Limit how many Subscribers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Subscriber upsert
   */
  export type SubscriberUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null;
    /**
     * The filter to search for the Subscriber to update in case it exists.
     */
    where: SubscriberWhereUniqueInput;
    /**
     * In case the Subscriber found by the `where` argument doesn't exist, create a new Subscriber with this data.
     */
    create: XOR<SubscriberCreateInput, SubscriberUncheckedCreateInput>;
    /**
     * In case the Subscriber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriberUpdateInput, SubscriberUncheckedUpdateInput>;
  };

  /**
   * Subscriber delete
   */
  export type SubscriberDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null;
    /**
     * Filter which Subscriber to delete.
     */
    where: SubscriberWhereUniqueInput;
  };

  /**
   * Subscriber deleteMany
   */
  export type SubscriberDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Subscribers to delete
     */
    where?: SubscriberWhereInput;
    /**
     * Limit how many Subscribers to delete.
     */
    limit?: number;
  };

  /**
   * Subscriber without action
   */
  export type SubscriberDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null;
  };

  /**
   * Model Broadcast
   */

  export type AggregateBroadcast = {
    _count: BroadcastCountAggregateOutputType | null;
    _avg: BroadcastAvgAggregateOutputType | null;
    _sum: BroadcastSumAggregateOutputType | null;
    _min: BroadcastMinAggregateOutputType | null;
    _max: BroadcastMaxAggregateOutputType | null;
  };

  export type BroadcastAvgAggregateOutputType = {
    successCount: number | null;
  };

  export type BroadcastSumAggregateOutputType = {
    successCount: number | null;
  };

  export type BroadcastMinAggregateOutputType = {
    id: string | null;
    message: string | null;
    botId: string | null;
    successCount: number | null;
    createdAt: Date | null;
  };

  export type BroadcastMaxAggregateOutputType = {
    id: string | null;
    message: string | null;
    botId: string | null;
    successCount: number | null;
    createdAt: Date | null;
  };

  export type BroadcastCountAggregateOutputType = {
    id: number;
    message: number;
    botId: number;
    successCount: number;
    createdAt: number;
    _all: number;
  };

  export type BroadcastAvgAggregateInputType = {
    successCount?: true;
  };

  export type BroadcastSumAggregateInputType = {
    successCount?: true;
  };

  export type BroadcastMinAggregateInputType = {
    id?: true;
    message?: true;
    botId?: true;
    successCount?: true;
    createdAt?: true;
  };

  export type BroadcastMaxAggregateInputType = {
    id?: true;
    message?: true;
    botId?: true;
    successCount?: true;
    createdAt?: true;
  };

  export type BroadcastCountAggregateInputType = {
    id?: true;
    message?: true;
    botId?: true;
    successCount?: true;
    createdAt?: true;
    _all?: true;
  };

  export type BroadcastAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Broadcast to aggregate.
     */
    where?: BroadcastWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Broadcasts to fetch.
     */
    orderBy?: BroadcastOrderByWithRelationInput | BroadcastOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BroadcastWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Broadcasts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Broadcasts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Broadcasts
     **/
    _count?: true | BroadcastCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: BroadcastAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: BroadcastSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BroadcastMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BroadcastMaxAggregateInputType;
  };

  export type GetBroadcastAggregateType<T extends BroadcastAggregateArgs> = {
    [P in keyof T & keyof AggregateBroadcast]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBroadcast[P]>
      : GetScalarType<T[P], AggregateBroadcast[P]>;
  };

  export type BroadcastGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BroadcastWhereInput;
    orderBy?: BroadcastOrderByWithAggregationInput | BroadcastOrderByWithAggregationInput[];
    by: BroadcastScalarFieldEnum[] | BroadcastScalarFieldEnum;
    having?: BroadcastScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BroadcastCountAggregateInputType | true;
    _avg?: BroadcastAvgAggregateInputType;
    _sum?: BroadcastSumAggregateInputType;
    _min?: BroadcastMinAggregateInputType;
    _max?: BroadcastMaxAggregateInputType;
  };

  export type BroadcastGroupByOutputType = {
    id: string;
    message: string;
    botId: string;
    successCount: number;
    createdAt: Date;
    _count: BroadcastCountAggregateOutputType | null;
    _avg: BroadcastAvgAggregateOutputType | null;
    _sum: BroadcastSumAggregateOutputType | null;
    _min: BroadcastMinAggregateOutputType | null;
    _max: BroadcastMaxAggregateOutputType | null;
  };

  type GetBroadcastGroupByPayload<T extends BroadcastGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BroadcastGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BroadcastGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BroadcastGroupByOutputType[P]>
          : GetScalarType<T[P], BroadcastGroupByOutputType[P]>;
      }
    >
  >;

  export type BroadcastSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        message?: boolean;
        botId?: boolean;
        successCount?: boolean;
        createdAt?: boolean;
        bot?: boolean | BotDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['broadcast']
    >;

  export type BroadcastSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      message?: boolean;
      botId?: boolean;
      successCount?: boolean;
      createdAt?: boolean;
      bot?: boolean | BotDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['broadcast']
  >;

  export type BroadcastSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      message?: boolean;
      botId?: boolean;
      successCount?: boolean;
      createdAt?: boolean;
      bot?: boolean | BotDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['broadcast']
  >;

  export type BroadcastSelectScalar = {
    id?: boolean;
    message?: boolean;
    botId?: boolean;
    successCount?: boolean;
    createdAt?: boolean;
  };

  export type BroadcastOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'message' | 'botId' | 'successCount' | 'createdAt',
      ExtArgs['result']['broadcast']
    >;
  export type BroadcastInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      bot?: boolean | BotDefaultArgs<ExtArgs>;
    };
  export type BroadcastIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    bot?: boolean | BotDefaultArgs<ExtArgs>;
  };
  export type BroadcastIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    bot?: boolean | BotDefaultArgs<ExtArgs>;
  };

  export type $BroadcastPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Broadcast';
    objects: {
      bot: Prisma.$BotPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        message: string;
        botId: string;
        successCount: number;
        createdAt: Date;
      },
      ExtArgs['result']['broadcast']
    >;
    composites: {};
  };

  type BroadcastGetPayload<S extends boolean | null | undefined | BroadcastDefaultArgs> =
    $Result.GetResult<Prisma.$BroadcastPayload, S>;

  type BroadcastCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BroadcastFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BroadcastCountAggregateInputType | true;
    };

  export interface BroadcastDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Broadcast'];
      meta: { name: 'Broadcast' };
    };
    /**
     * Find zero or one Broadcast that matches the filter.
     * @param {BroadcastFindUniqueArgs} args - Arguments to find a Broadcast
     * @example
     * // Get one Broadcast
     * const broadcast = await prisma.broadcast.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BroadcastFindUniqueArgs>(
      args: SelectSubset<T, BroadcastFindUniqueArgs<ExtArgs>>
    ): Prisma__BroadcastClient<
      $Result.GetResult<
        Prisma.$BroadcastPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Broadcast that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BroadcastFindUniqueOrThrowArgs} args - Arguments to find a Broadcast
     * @example
     * // Get one Broadcast
     * const broadcast = await prisma.broadcast.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BroadcastFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BroadcastFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BroadcastClient<
      $Result.GetResult<
        Prisma.$BroadcastPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Broadcast that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastFindFirstArgs} args - Arguments to find a Broadcast
     * @example
     * // Get one Broadcast
     * const broadcast = await prisma.broadcast.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BroadcastFindFirstArgs>(
      args?: SelectSubset<T, BroadcastFindFirstArgs<ExtArgs>>
    ): Prisma__BroadcastClient<
      $Result.GetResult<
        Prisma.$BroadcastPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Broadcast that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastFindFirstOrThrowArgs} args - Arguments to find a Broadcast
     * @example
     * // Get one Broadcast
     * const broadcast = await prisma.broadcast.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BroadcastFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BroadcastFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BroadcastClient<
      $Result.GetResult<
        Prisma.$BroadcastPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Broadcasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Broadcasts
     * const broadcasts = await prisma.broadcast.findMany()
     *
     * // Get first 10 Broadcasts
     * const broadcasts = await prisma.broadcast.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const broadcastWithIdOnly = await prisma.broadcast.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BroadcastFindManyArgs>(
      args?: SelectSubset<T, BroadcastFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$BroadcastPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Broadcast.
     * @param {BroadcastCreateArgs} args - Arguments to create a Broadcast.
     * @example
     * // Create one Broadcast
     * const Broadcast = await prisma.broadcast.create({
     *   data: {
     *     // ... data to create a Broadcast
     *   }
     * })
     *
     */
    create<T extends BroadcastCreateArgs>(
      args: SelectSubset<T, BroadcastCreateArgs<ExtArgs>>
    ): Prisma__BroadcastClient<
      $Result.GetResult<Prisma.$BroadcastPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Broadcasts.
     * @param {BroadcastCreateManyArgs} args - Arguments to create many Broadcasts.
     * @example
     * // Create many Broadcasts
     * const broadcast = await prisma.broadcast.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BroadcastCreateManyArgs>(
      args?: SelectSubset<T, BroadcastCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Broadcasts and returns the data saved in the database.
     * @param {BroadcastCreateManyAndReturnArgs} args - Arguments to create many Broadcasts.
     * @example
     * // Create many Broadcasts
     * const broadcast = await prisma.broadcast.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Broadcasts and only return the `id`
     * const broadcastWithIdOnly = await prisma.broadcast.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BroadcastCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BroadcastCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BroadcastPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Broadcast.
     * @param {BroadcastDeleteArgs} args - Arguments to delete one Broadcast.
     * @example
     * // Delete one Broadcast
     * const Broadcast = await prisma.broadcast.delete({
     *   where: {
     *     // ... filter to delete one Broadcast
     *   }
     * })
     *
     */
    delete<T extends BroadcastDeleteArgs>(
      args: SelectSubset<T, BroadcastDeleteArgs<ExtArgs>>
    ): Prisma__BroadcastClient<
      $Result.GetResult<Prisma.$BroadcastPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Broadcast.
     * @param {BroadcastUpdateArgs} args - Arguments to update one Broadcast.
     * @example
     * // Update one Broadcast
     * const broadcast = await prisma.broadcast.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BroadcastUpdateArgs>(
      args: SelectSubset<T, BroadcastUpdateArgs<ExtArgs>>
    ): Prisma__BroadcastClient<
      $Result.GetResult<Prisma.$BroadcastPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Broadcasts.
     * @param {BroadcastDeleteManyArgs} args - Arguments to filter Broadcasts to delete.
     * @example
     * // Delete a few Broadcasts
     * const { count } = await prisma.broadcast.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BroadcastDeleteManyArgs>(
      args?: SelectSubset<T, BroadcastDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Broadcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Broadcasts
     * const broadcast = await prisma.broadcast.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BroadcastUpdateManyArgs>(
      args: SelectSubset<T, BroadcastUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Broadcasts and returns the data updated in the database.
     * @param {BroadcastUpdateManyAndReturnArgs} args - Arguments to update many Broadcasts.
     * @example
     * // Update many Broadcasts
     * const broadcast = await prisma.broadcast.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Broadcasts and only return the `id`
     * const broadcastWithIdOnly = await prisma.broadcast.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BroadcastUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BroadcastUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BroadcastPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Broadcast.
     * @param {BroadcastUpsertArgs} args - Arguments to update or create a Broadcast.
     * @example
     * // Update or create a Broadcast
     * const broadcast = await prisma.broadcast.upsert({
     *   create: {
     *     // ... data to create a Broadcast
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Broadcast we want to update
     *   }
     * })
     */
    upsert<T extends BroadcastUpsertArgs>(
      args: SelectSubset<T, BroadcastUpsertArgs<ExtArgs>>
    ): Prisma__BroadcastClient<
      $Result.GetResult<Prisma.$BroadcastPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Broadcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastCountArgs} args - Arguments to filter Broadcasts to count.
     * @example
     * // Count the number of Broadcasts
     * const count = await prisma.broadcast.count({
     *   where: {
     *     // ... the filter for the Broadcasts we want to count
     *   }
     * })
     **/
    count<T extends BroadcastCountArgs>(
      args?: Subset<T, BroadcastCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BroadcastCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Broadcast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BroadcastAggregateArgs>(
      args: Subset<T, BroadcastAggregateArgs>
    ): Prisma.PrismaPromise<GetBroadcastAggregateType<T>>;

    /**
     * Group by Broadcast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends BroadcastGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BroadcastGroupByArgs['orderBy'] }
        : { orderBy?: BroadcastGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, BroadcastGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetBroadcastGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Broadcast model
     */
    readonly fields: BroadcastFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Broadcast.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BroadcastClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    bot<T extends BotDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BotDefaultArgs<ExtArgs>>
    ): Prisma__BotClient<
      | $Result.GetResult<Prisma.$BotPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Broadcast model
   */
  interface BroadcastFieldRefs {
    readonly id: FieldRef<'Broadcast', 'String'>;
    readonly message: FieldRef<'Broadcast', 'String'>;
    readonly botId: FieldRef<'Broadcast', 'String'>;
    readonly successCount: FieldRef<'Broadcast', 'Int'>;
    readonly createdAt: FieldRef<'Broadcast', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Broadcast findUnique
   */
  export type BroadcastFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Broadcast
     */
    select?: BroadcastSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Broadcast
     */
    omit?: BroadcastOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastInclude<ExtArgs> | null;
    /**
     * Filter, which Broadcast to fetch.
     */
    where: BroadcastWhereUniqueInput;
  };

  /**
   * Broadcast findUniqueOrThrow
   */
  export type BroadcastFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Broadcast
     */
    select?: BroadcastSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Broadcast
     */
    omit?: BroadcastOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastInclude<ExtArgs> | null;
    /**
     * Filter, which Broadcast to fetch.
     */
    where: BroadcastWhereUniqueInput;
  };

  /**
   * Broadcast findFirst
   */
  export type BroadcastFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Broadcast
     */
    select?: BroadcastSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Broadcast
     */
    omit?: BroadcastOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastInclude<ExtArgs> | null;
    /**
     * Filter, which Broadcast to fetch.
     */
    where?: BroadcastWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Broadcasts to fetch.
     */
    orderBy?: BroadcastOrderByWithRelationInput | BroadcastOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Broadcasts.
     */
    cursor?: BroadcastWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Broadcasts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Broadcasts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Broadcasts.
     */
    distinct?: BroadcastScalarFieldEnum | BroadcastScalarFieldEnum[];
  };

  /**
   * Broadcast findFirstOrThrow
   */
  export type BroadcastFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Broadcast
     */
    select?: BroadcastSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Broadcast
     */
    omit?: BroadcastOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastInclude<ExtArgs> | null;
    /**
     * Filter, which Broadcast to fetch.
     */
    where?: BroadcastWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Broadcasts to fetch.
     */
    orderBy?: BroadcastOrderByWithRelationInput | BroadcastOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Broadcasts.
     */
    cursor?: BroadcastWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Broadcasts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Broadcasts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Broadcasts.
     */
    distinct?: BroadcastScalarFieldEnum | BroadcastScalarFieldEnum[];
  };

  /**
   * Broadcast findMany
   */
  export type BroadcastFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Broadcast
     */
    select?: BroadcastSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Broadcast
     */
    omit?: BroadcastOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastInclude<ExtArgs> | null;
    /**
     * Filter, which Broadcasts to fetch.
     */
    where?: BroadcastWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Broadcasts to fetch.
     */
    orderBy?: BroadcastOrderByWithRelationInput | BroadcastOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Broadcasts.
     */
    cursor?: BroadcastWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Broadcasts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Broadcasts.
     */
    skip?: number;
    distinct?: BroadcastScalarFieldEnum | BroadcastScalarFieldEnum[];
  };

  /**
   * Broadcast create
   */
  export type BroadcastCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Broadcast
     */
    select?: BroadcastSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Broadcast
     */
    omit?: BroadcastOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastInclude<ExtArgs> | null;
    /**
     * The data needed to create a Broadcast.
     */
    data: XOR<BroadcastCreateInput, BroadcastUncheckedCreateInput>;
  };

  /**
   * Broadcast createMany
   */
  export type BroadcastCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Broadcasts.
     */
    data: BroadcastCreateManyInput | BroadcastCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Broadcast createManyAndReturn
   */
  export type BroadcastCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Broadcast
     */
    select?: BroadcastSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Broadcast
     */
    omit?: BroadcastOmit<ExtArgs> | null;
    /**
     * The data used to create many Broadcasts.
     */
    data: BroadcastCreateManyInput | BroadcastCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Broadcast update
   */
  export type BroadcastUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Broadcast
     */
    select?: BroadcastSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Broadcast
     */
    omit?: BroadcastOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastInclude<ExtArgs> | null;
    /**
     * The data needed to update a Broadcast.
     */
    data: XOR<BroadcastUpdateInput, BroadcastUncheckedUpdateInput>;
    /**
     * Choose, which Broadcast to update.
     */
    where: BroadcastWhereUniqueInput;
  };

  /**
   * Broadcast updateMany
   */
  export type BroadcastUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Broadcasts.
     */
    data: XOR<BroadcastUpdateManyMutationInput, BroadcastUncheckedUpdateManyInput>;
    /**
     * Filter which Broadcasts to update
     */
    where?: BroadcastWhereInput;
    /**
     * Limit how many Broadcasts to update.
     */
    limit?: number;
  };

  /**
   * Broadcast updateManyAndReturn
   */
  export type BroadcastUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Broadcast
     */
    select?: BroadcastSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Broadcast
     */
    omit?: BroadcastOmit<ExtArgs> | null;
    /**
     * The data used to update Broadcasts.
     */
    data: XOR<BroadcastUpdateManyMutationInput, BroadcastUncheckedUpdateManyInput>;
    /**
     * Filter which Broadcasts to update
     */
    where?: BroadcastWhereInput;
    /**
     * Limit how many Broadcasts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Broadcast upsert
   */
  export type BroadcastUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Broadcast
     */
    select?: BroadcastSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Broadcast
     */
    omit?: BroadcastOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastInclude<ExtArgs> | null;
    /**
     * The filter to search for the Broadcast to update in case it exists.
     */
    where: BroadcastWhereUniqueInput;
    /**
     * In case the Broadcast found by the `where` argument doesn't exist, create a new Broadcast with this data.
     */
    create: XOR<BroadcastCreateInput, BroadcastUncheckedCreateInput>;
    /**
     * In case the Broadcast was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BroadcastUpdateInput, BroadcastUncheckedUpdateInput>;
  };

  /**
   * Broadcast delete
   */
  export type BroadcastDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Broadcast
     */
    select?: BroadcastSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Broadcast
     */
    omit?: BroadcastOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastInclude<ExtArgs> | null;
    /**
     * Filter which Broadcast to delete.
     */
    where: BroadcastWhereUniqueInput;
  };

  /**
   * Broadcast deleteMany
   */
  export type BroadcastDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Broadcasts to delete
     */
    where?: BroadcastWhereInput;
    /**
     * Limit how many Broadcasts to delete.
     */
    limit?: number;
  };

  /**
   * Broadcast without action
   */
  export type BroadcastDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Broadcast
     */
    select?: BroadcastSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Broadcast
     */
    omit?: BroadcastOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastInclude<ExtArgs> | null;
  };

  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null;
    _min: FeedbackMinAggregateOutputType | null;
    _max: FeedbackMaxAggregateOutputType | null;
  };

  export type FeedbackMinAggregateOutputType = {
    id: string | null;
    message: string | null;
    email: string | null;
    userId: string | null;
    createdAt: Date | null;
  };

  export type FeedbackMaxAggregateOutputType = {
    id: string | null;
    message: string | null;
    email: string | null;
    userId: string | null;
    createdAt: Date | null;
  };

  export type FeedbackCountAggregateOutputType = {
    id: number;
    message: number;
    email: number;
    userId: number;
    createdAt: number;
    _all: number;
  };

  export type FeedbackMinAggregateInputType = {
    id?: true;
    message?: true;
    email?: true;
    userId?: true;
    createdAt?: true;
  };

  export type FeedbackMaxAggregateInputType = {
    id?: true;
    message?: true;
    email?: true;
    userId?: true;
    createdAt?: true;
  };

  export type FeedbackCountAggregateInputType = {
    id?: true;
    message?: true;
    email?: true;
    userId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type FeedbackAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Feedbacks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Feedbacks
     **/
    _count?: true | FeedbackCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FeedbackMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FeedbackMaxAggregateInputType;
  };

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
    [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>;
  };

  export type FeedbackGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FeedbackWhereInput;
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[];
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum;
    having?: FeedbackScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FeedbackCountAggregateInputType | true;
    _min?: FeedbackMinAggregateInputType;
    _max?: FeedbackMaxAggregateInputType;
  };

  export type FeedbackGroupByOutputType = {
    id: string;
    message: string;
    email: string | null;
    userId: string | null;
    createdAt: Date;
    _count: FeedbackCountAggregateOutputType | null;
    _min: FeedbackMinAggregateOutputType | null;
    _max: FeedbackMaxAggregateOutputType | null;
  };

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> & {
        [P in keyof T & keyof FeedbackGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
          : GetScalarType<T[P], FeedbackGroupByOutputType[P]>;
      }
    >
  >;

  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        message?: boolean;
        email?: boolean;
        userId?: boolean;
        createdAt?: boolean;
        user?: boolean | Feedback$userArgs<ExtArgs>;
      },
      ExtArgs['result']['feedback']
    >;

  export type FeedbackSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      message?: boolean;
      email?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      user?: boolean | Feedback$userArgs<ExtArgs>;
    },
    ExtArgs['result']['feedback']
  >;

  export type FeedbackSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      message?: boolean;
      email?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      user?: boolean | Feedback$userArgs<ExtArgs>;
    },
    ExtArgs['result']['feedback']
  >;

  export type FeedbackSelectScalar = {
    id?: boolean;
    message?: boolean;
    email?: boolean;
    userId?: boolean;
    createdAt?: boolean;
  };

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'message' | 'email' | 'userId' | 'createdAt',
      ExtArgs['result']['feedback']
    >;
  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      user?: boolean | Feedback$userArgs<ExtArgs>;
    };
  export type FeedbackIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | Feedback$userArgs<ExtArgs>;
  };
  export type FeedbackIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | Feedback$userArgs<ExtArgs>;
  };

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Feedback';
      objects: {
        user: Prisma.$UserPayload<ExtArgs> | null;
      };
      scalars: $Extensions.GetPayloadResult<
        {
          id: string;
          message: string;
          email: string | null;
          userId: string | null;
          createdAt: Date;
        },
        ExtArgs['result']['feedback']
      >;
      composites: {};
    };

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> =
    $Result.GetResult<Prisma.$FeedbackPayload, S>;

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    FeedbackFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: FeedbackCountAggregateInputType | true;
  };

  export interface FeedbackDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Feedback'];
      meta: { name: 'Feedback' };
    };
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(
      args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>
    ): Prisma__FeedbackClient<
      $Result.GetResult<
        Prisma.$FeedbackPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(
      args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FeedbackClient<
      $Result.GetResult<
        Prisma.$FeedbackPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(
      args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>
    ): Prisma__FeedbackClient<
      $Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FeedbackClient<
      $Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     *
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FeedbackFindManyArgs>(
      args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     *
     */
    create<T extends FeedbackCreateArgs>(
      args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>
    ): Prisma__FeedbackClient<
      $Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FeedbackCreateManyArgs>(
      args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(
      args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FeedbackPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     *
     */
    delete<T extends FeedbackDeleteArgs>(
      args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>
    ): Prisma__FeedbackClient<
      $Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FeedbackUpdateArgs>(
      args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>
    ): Prisma__FeedbackClient<
      $Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(
      args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FeedbackUpdateManyArgs>(
      args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(
      args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FeedbackPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(
      args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>
    ): Prisma__FeedbackClient<
      $Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
     **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FeedbackAggregateArgs>(
      args: Subset<T, FeedbackAggregateArgs>
    ): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>;

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Feedback model
     */
    readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends Feedback$userArgs<ExtArgs> = {}>(
      args?: Subset<T, Feedback$userArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<'Feedback', 'String'>;
    readonly message: FieldRef<'Feedback', 'String'>;
    readonly email: FieldRef<'Feedback', 'String'>;
    readonly userId: FieldRef<'Feedback', 'String'>;
    readonly createdAt: FieldRef<'Feedback', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput;
  };

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput;
  };

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Feedbacks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[];
  };

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Feedbacks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[];
  };

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Feedbacks.
     */
    skip?: number;
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[];
  };

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>;
  };

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>;
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput;
  };

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>;
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput;
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number;
  };

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>;
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput;
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput;
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>;
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>;
  };

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput;
  };

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput;
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number;
  };

  /**
   * Feedback.user
   */
  export type Feedback$userArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
  };

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    username: 'username';
    password: 'password';
    profileImg: 'profileImg';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const TeamScalarFieldEnum: {
    id: 'id';
    name: 'name';
    ownerId: 'ownerId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum];

  export const TeamMemberScalarFieldEnum: {
    id: 'id';
    teamId: 'teamId';
    userId: 'userId';
    role: 'role';
  };

  export type TeamMemberScalarFieldEnum =
    (typeof TeamMemberScalarFieldEnum)[keyof typeof TeamMemberScalarFieldEnum];

  export const BotScalarFieldEnum: {
    id: 'id';
    token: 'token';
    name: 'name';
    username: 'username';
    userId: 'userId';
    teamId: 'teamId';
    logicFlow: 'logicFlow';
    createdAt: 'createdAt';
  };

  export type BotScalarFieldEnum = (typeof BotScalarFieldEnum)[keyof typeof BotScalarFieldEnum];

  export const SubscriberScalarFieldEnum: {
    id: 'id';
    chatId: 'chatId';
    username: 'username';
    firstName: 'firstName';
    lastName: 'lastName';
    botId: 'botId';
    createdAt: 'createdAt';
  };

  export type SubscriberScalarFieldEnum =
    (typeof SubscriberScalarFieldEnum)[keyof typeof SubscriberScalarFieldEnum];

  export const BroadcastScalarFieldEnum: {
    id: 'id';
    message: 'message';
    botId: 'botId';
    successCount: 'successCount';
    createdAt: 'createdAt';
  };

  export type BroadcastScalarFieldEnum =
    (typeof BroadcastScalarFieldEnum)[keyof typeof BroadcastScalarFieldEnum];

  export const FeedbackScalarFieldEnum: {
    id: 'id';
    message: 'message';
    email: 'email';
    userId: 'userId';
    createdAt: 'createdAt';
  };

  export type FeedbackScalarFieldEnum =
    (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
  };

  export type NullableJsonNullValueInput =
    (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'TeamMemberRole'
   */
  export type EnumTeamMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'TeamMemberRole'
  >;

  /**
   * Reference to a field of type 'TeamMemberRole[]'
   */
  export type ListEnumTeamMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'TeamMemberRole[]'
  >;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'QueryMode'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    username?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    profileImg?: StringNullableFilter<'User'> | string | null;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    bot?: BotListRelationFilter;
    feedback?: FeedbackListRelationFilter;
    teams?: TeamMemberListRelationFilter;
    teamsOwned?: TeamListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    profileImg?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    bot?: BotOrderByRelationAggregateInput;
    feedback?: FeedbackOrderByRelationAggregateInput;
    teams?: TeamMemberOrderByRelationAggregateInput;
    teamsOwned?: TeamOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      username?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      password?: StringFilter<'User'> | string;
      profileImg?: StringNullableFilter<'User'> | string | null;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      bot?: BotListRelationFilter;
      feedback?: FeedbackListRelationFilter;
      teams?: TeamMemberListRelationFilter;
      teamsOwned?: TeamListRelationFilter;
    },
    'id' | 'username'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    profileImg?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    username?: StringWithAggregatesFilter<'User'> | string;
    password?: StringWithAggregatesFilter<'User'> | string;
    profileImg?: StringNullableWithAggregatesFilter<'User'> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[];
    OR?: TeamWhereInput[];
    NOT?: TeamWhereInput | TeamWhereInput[];
    id?: StringFilter<'Team'> | string;
    name?: StringFilter<'Team'> | string;
    ownerId?: StringFilter<'Team'> | string;
    createdAt?: DateTimeFilter<'Team'> | Date | string;
    updatedAt?: DateTimeFilter<'Team'> | Date | string;
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>;
    members?: TeamMemberListRelationFilter;
    bots?: BotListRelationFilter;
  };

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    ownerId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    owner?: UserOrderByWithRelationInput;
    members?: TeamMemberOrderByRelationAggregateInput;
    bots?: BotOrderByRelationAggregateInput;
  };

  export type TeamWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TeamWhereInput | TeamWhereInput[];
      OR?: TeamWhereInput[];
      NOT?: TeamWhereInput | TeamWhereInput[];
      name?: StringFilter<'Team'> | string;
      ownerId?: StringFilter<'Team'> | string;
      createdAt?: DateTimeFilter<'Team'> | Date | string;
      updatedAt?: DateTimeFilter<'Team'> | Date | string;
      owner?: XOR<UserScalarRelationFilter, UserWhereInput>;
      members?: TeamMemberListRelationFilter;
      bots?: BotListRelationFilter;
    },
    'id'
  >;

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    ownerId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: TeamCountOrderByAggregateInput;
    _max?: TeamMaxOrderByAggregateInput;
    _min?: TeamMinOrderByAggregateInput;
  };

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[];
    OR?: TeamScalarWhereWithAggregatesInput[];
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Team'> | string;
    name?: StringWithAggregatesFilter<'Team'> | string;
    ownerId?: StringWithAggregatesFilter<'Team'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Team'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Team'> | Date | string;
  };

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[];
    OR?: TeamMemberWhereInput[];
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[];
    id?: StringFilter<'TeamMember'> | string;
    teamId?: StringFilter<'TeamMember'> | string;
    userId?: StringFilter<'TeamMember'> | string;
    role?: EnumTeamMemberRoleFilter<'TeamMember'> | $Enums.TeamMemberRole;
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type TeamMemberOrderByWithRelationInput = {
    id?: SortOrder;
    teamId?: SortOrder;
    userId?: SortOrder;
    role?: SortOrder;
    team?: TeamOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TeamMemberWhereInput | TeamMemberWhereInput[];
      OR?: TeamMemberWhereInput[];
      NOT?: TeamMemberWhereInput | TeamMemberWhereInput[];
      teamId?: StringFilter<'TeamMember'> | string;
      userId?: StringFilter<'TeamMember'> | string;
      role?: EnumTeamMemberRoleFilter<'TeamMember'> | $Enums.TeamMemberRole;
      team?: XOR<TeamScalarRelationFilter, TeamWhereInput>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type TeamMemberOrderByWithAggregationInput = {
    id?: SortOrder;
    teamId?: SortOrder;
    userId?: SortOrder;
    role?: SortOrder;
    _count?: TeamMemberCountOrderByAggregateInput;
    _max?: TeamMemberMaxOrderByAggregateInput;
    _min?: TeamMemberMinOrderByAggregateInput;
  };

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[];
    OR?: TeamMemberScalarWhereWithAggregatesInput[];
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'TeamMember'> | string;
    teamId?: StringWithAggregatesFilter<'TeamMember'> | string;
    userId?: StringWithAggregatesFilter<'TeamMember'> | string;
    role?: EnumTeamMemberRoleWithAggregatesFilter<'TeamMember'> | $Enums.TeamMemberRole;
  };

  export type BotWhereInput = {
    AND?: BotWhereInput | BotWhereInput[];
    OR?: BotWhereInput[];
    NOT?: BotWhereInput | BotWhereInput[];
    id?: StringFilter<'Bot'> | string;
    token?: StringFilter<'Bot'> | string;
    name?: StringFilter<'Bot'> | string;
    username?: StringFilter<'Bot'> | string;
    userId?: StringNullableFilter<'Bot'> | string | null;
    teamId?: StringNullableFilter<'Bot'> | string | null;
    logicFlow?: JsonNullableFilter<'Bot'>;
    createdAt?: DateTimeFilter<'Bot'> | Date | string;
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null;
    subscribers?: SubscriberListRelationFilter;
    broadcasts?: BroadcastListRelationFilter;
  };

  export type BotOrderByWithRelationInput = {
    id?: SortOrder;
    token?: SortOrder;
    name?: SortOrder;
    username?: SortOrder;
    userId?: SortOrderInput | SortOrder;
    teamId?: SortOrderInput | SortOrder;
    logicFlow?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    team?: TeamOrderByWithRelationInput;
    subscribers?: SubscriberOrderByRelationAggregateInput;
    broadcasts?: BroadcastOrderByRelationAggregateInput;
  };

  export type BotWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      token?: string;
      AND?: BotWhereInput | BotWhereInput[];
      OR?: BotWhereInput[];
      NOT?: BotWhereInput | BotWhereInput[];
      name?: StringFilter<'Bot'> | string;
      username?: StringFilter<'Bot'> | string;
      userId?: StringNullableFilter<'Bot'> | string | null;
      teamId?: StringNullableFilter<'Bot'> | string | null;
      logicFlow?: JsonNullableFilter<'Bot'>;
      createdAt?: DateTimeFilter<'Bot'> | Date | string;
      user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
      team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null;
      subscribers?: SubscriberListRelationFilter;
      broadcasts?: BroadcastListRelationFilter;
    },
    'id' | 'token'
  >;

  export type BotOrderByWithAggregationInput = {
    id?: SortOrder;
    token?: SortOrder;
    name?: SortOrder;
    username?: SortOrder;
    userId?: SortOrderInput | SortOrder;
    teamId?: SortOrderInput | SortOrder;
    logicFlow?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    _count?: BotCountOrderByAggregateInput;
    _max?: BotMaxOrderByAggregateInput;
    _min?: BotMinOrderByAggregateInput;
  };

  export type BotScalarWhereWithAggregatesInput = {
    AND?: BotScalarWhereWithAggregatesInput | BotScalarWhereWithAggregatesInput[];
    OR?: BotScalarWhereWithAggregatesInput[];
    NOT?: BotScalarWhereWithAggregatesInput | BotScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Bot'> | string;
    token?: StringWithAggregatesFilter<'Bot'> | string;
    name?: StringWithAggregatesFilter<'Bot'> | string;
    username?: StringWithAggregatesFilter<'Bot'> | string;
    userId?: StringNullableWithAggregatesFilter<'Bot'> | string | null;
    teamId?: StringNullableWithAggregatesFilter<'Bot'> | string | null;
    logicFlow?: JsonNullableWithAggregatesFilter<'Bot'>;
    createdAt?: DateTimeWithAggregatesFilter<'Bot'> | Date | string;
  };

  export type SubscriberWhereInput = {
    AND?: SubscriberWhereInput | SubscriberWhereInput[];
    OR?: SubscriberWhereInput[];
    NOT?: SubscriberWhereInput | SubscriberWhereInput[];
    id?: StringFilter<'Subscriber'> | string;
    chatId?: StringFilter<'Subscriber'> | string;
    username?: StringNullableFilter<'Subscriber'> | string | null;
    firstName?: StringNullableFilter<'Subscriber'> | string | null;
    lastName?: StringNullableFilter<'Subscriber'> | string | null;
    botId?: StringFilter<'Subscriber'> | string;
    createdAt?: DateTimeFilter<'Subscriber'> | Date | string;
    bot?: XOR<BotScalarRelationFilter, BotWhereInput>;
  };

  export type SubscriberOrderByWithRelationInput = {
    id?: SortOrder;
    chatId?: SortOrder;
    username?: SortOrderInput | SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    botId?: SortOrder;
    createdAt?: SortOrder;
    bot?: BotOrderByWithRelationInput;
  };

  export type SubscriberWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: SubscriberWhereInput | SubscriberWhereInput[];
      OR?: SubscriberWhereInput[];
      NOT?: SubscriberWhereInput | SubscriberWhereInput[];
      chatId?: StringFilter<'Subscriber'> | string;
      username?: StringNullableFilter<'Subscriber'> | string | null;
      firstName?: StringNullableFilter<'Subscriber'> | string | null;
      lastName?: StringNullableFilter<'Subscriber'> | string | null;
      botId?: StringFilter<'Subscriber'> | string;
      createdAt?: DateTimeFilter<'Subscriber'> | Date | string;
      bot?: XOR<BotScalarRelationFilter, BotWhereInput>;
    },
    'id'
  >;

  export type SubscriberOrderByWithAggregationInput = {
    id?: SortOrder;
    chatId?: SortOrder;
    username?: SortOrderInput | SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    botId?: SortOrder;
    createdAt?: SortOrder;
    _count?: SubscriberCountOrderByAggregateInput;
    _max?: SubscriberMaxOrderByAggregateInput;
    _min?: SubscriberMinOrderByAggregateInput;
  };

  export type SubscriberScalarWhereWithAggregatesInput = {
    AND?: SubscriberScalarWhereWithAggregatesInput | SubscriberScalarWhereWithAggregatesInput[];
    OR?: SubscriberScalarWhereWithAggregatesInput[];
    NOT?: SubscriberScalarWhereWithAggregatesInput | SubscriberScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Subscriber'> | string;
    chatId?: StringWithAggregatesFilter<'Subscriber'> | string;
    username?: StringNullableWithAggregatesFilter<'Subscriber'> | string | null;
    firstName?: StringNullableWithAggregatesFilter<'Subscriber'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'Subscriber'> | string | null;
    botId?: StringWithAggregatesFilter<'Subscriber'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Subscriber'> | Date | string;
  };

  export type BroadcastWhereInput = {
    AND?: BroadcastWhereInput | BroadcastWhereInput[];
    OR?: BroadcastWhereInput[];
    NOT?: BroadcastWhereInput | BroadcastWhereInput[];
    id?: StringFilter<'Broadcast'> | string;
    message?: StringFilter<'Broadcast'> | string;
    botId?: StringFilter<'Broadcast'> | string;
    successCount?: IntFilter<'Broadcast'> | number;
    createdAt?: DateTimeFilter<'Broadcast'> | Date | string;
    bot?: XOR<BotScalarRelationFilter, BotWhereInput>;
  };

  export type BroadcastOrderByWithRelationInput = {
    id?: SortOrder;
    message?: SortOrder;
    botId?: SortOrder;
    successCount?: SortOrder;
    createdAt?: SortOrder;
    bot?: BotOrderByWithRelationInput;
  };

  export type BroadcastWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: BroadcastWhereInput | BroadcastWhereInput[];
      OR?: BroadcastWhereInput[];
      NOT?: BroadcastWhereInput | BroadcastWhereInput[];
      message?: StringFilter<'Broadcast'> | string;
      botId?: StringFilter<'Broadcast'> | string;
      successCount?: IntFilter<'Broadcast'> | number;
      createdAt?: DateTimeFilter<'Broadcast'> | Date | string;
      bot?: XOR<BotScalarRelationFilter, BotWhereInput>;
    },
    'id'
  >;

  export type BroadcastOrderByWithAggregationInput = {
    id?: SortOrder;
    message?: SortOrder;
    botId?: SortOrder;
    successCount?: SortOrder;
    createdAt?: SortOrder;
    _count?: BroadcastCountOrderByAggregateInput;
    _avg?: BroadcastAvgOrderByAggregateInput;
    _max?: BroadcastMaxOrderByAggregateInput;
    _min?: BroadcastMinOrderByAggregateInput;
    _sum?: BroadcastSumOrderByAggregateInput;
  };

  export type BroadcastScalarWhereWithAggregatesInput = {
    AND?: BroadcastScalarWhereWithAggregatesInput | BroadcastScalarWhereWithAggregatesInput[];
    OR?: BroadcastScalarWhereWithAggregatesInput[];
    NOT?: BroadcastScalarWhereWithAggregatesInput | BroadcastScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Broadcast'> | string;
    message?: StringWithAggregatesFilter<'Broadcast'> | string;
    botId?: StringWithAggregatesFilter<'Broadcast'> | string;
    successCount?: IntWithAggregatesFilter<'Broadcast'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'Broadcast'> | Date | string;
  };

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[];
    OR?: FeedbackWhereInput[];
    NOT?: FeedbackWhereInput | FeedbackWhereInput[];
    id?: StringFilter<'Feedback'> | string;
    message?: StringFilter<'Feedback'> | string;
    email?: StringNullableFilter<'Feedback'> | string | null;
    userId?: StringNullableFilter<'Feedback'> | string | null;
    createdAt?: DateTimeFilter<'Feedback'> | Date | string;
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
  };

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder;
    message?: SortOrder;
    email?: SortOrderInput | SortOrder;
    userId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: FeedbackWhereInput | FeedbackWhereInput[];
      OR?: FeedbackWhereInput[];
      NOT?: FeedbackWhereInput | FeedbackWhereInput[];
      message?: StringFilter<'Feedback'> | string;
      email?: StringNullableFilter<'Feedback'> | string | null;
      userId?: StringNullableFilter<'Feedback'> | string | null;
      createdAt?: DateTimeFilter<'Feedback'> | Date | string;
      user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
    },
    'id'
  >;

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder;
    message?: SortOrder;
    email?: SortOrderInput | SortOrder;
    userId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    _count?: FeedbackCountOrderByAggregateInput;
    _max?: FeedbackMaxOrderByAggregateInput;
    _min?: FeedbackMinOrderByAggregateInput;
  };

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[];
    OR?: FeedbackScalarWhereWithAggregatesInput[];
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Feedback'> | string;
    message?: StringWithAggregatesFilter<'Feedback'> | string;
    email?: StringNullableWithAggregatesFilter<'Feedback'> | string | null;
    userId?: StringNullableWithAggregatesFilter<'Feedback'> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'Feedback'> | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    username: string;
    password: string;
    profileImg?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bot?: BotCreateNestedManyWithoutUserInput;
    feedback?: FeedbackCreateNestedManyWithoutUserInput;
    teams?: TeamMemberCreateNestedManyWithoutUserInput;
    teamsOwned?: TeamCreateNestedManyWithoutOwnerInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    username: string;
    password: string;
    profileImg?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bot?: BotUncheckedCreateNestedManyWithoutUserInput;
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput;
    teams?: TeamMemberUncheckedCreateNestedManyWithoutUserInput;
    teamsOwned?: TeamUncheckedCreateNestedManyWithoutOwnerInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bot?: BotUpdateManyWithoutUserNestedInput;
    feedback?: FeedbackUpdateManyWithoutUserNestedInput;
    teams?: TeamMemberUpdateManyWithoutUserNestedInput;
    teamsOwned?: TeamUpdateManyWithoutOwnerNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bot?: BotUncheckedUpdateManyWithoutUserNestedInput;
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput;
    teams?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput;
    teamsOwned?: TeamUncheckedUpdateManyWithoutOwnerNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    username: string;
    password: string;
    profileImg?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TeamCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: UserCreateNestedOneWithoutTeamsOwnedInput;
    members?: TeamMemberCreateNestedManyWithoutTeamInput;
    bots?: BotCreateNestedManyWithoutTeamInput;
  };

  export type TeamUncheckedCreateInput = {
    id?: string;
    name: string;
    ownerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput;
    bots?: BotUncheckedCreateNestedManyWithoutTeamInput;
  };

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: UserUpdateOneRequiredWithoutTeamsOwnedNestedInput;
    members?: TeamMemberUpdateManyWithoutTeamNestedInput;
    bots?: BotUpdateManyWithoutTeamNestedInput;
  };

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    ownerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput;
    bots?: BotUncheckedUpdateManyWithoutTeamNestedInput;
  };

  export type TeamCreateManyInput = {
    id?: string;
    name: string;
    ownerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    ownerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TeamMemberCreateInput = {
    id?: string;
    role: $Enums.TeamMemberRole;
    team: TeamCreateNestedOneWithoutMembersInput;
    user: UserCreateNestedOneWithoutTeamsInput;
  };

  export type TeamMemberUncheckedCreateInput = {
    id?: string;
    teamId: string;
    userId: string;
    role: $Enums.TeamMemberRole;
  };

  export type TeamMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole;
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput;
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput;
  };

  export type TeamMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole;
  };

  export type TeamMemberCreateManyInput = {
    id?: string;
    teamId: string;
    userId: string;
    role: $Enums.TeamMemberRole;
  };

  export type TeamMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole;
  };

  export type TeamMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole;
  };

  export type BotCreateInput = {
    id?: string;
    token: string;
    name: string;
    username: string;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    user?: UserCreateNestedOneWithoutBotInput;
    team?: TeamCreateNestedOneWithoutBotsInput;
    subscribers?: SubscriberCreateNestedManyWithoutBotInput;
    broadcasts?: BroadcastCreateNestedManyWithoutBotInput;
  };

  export type BotUncheckedCreateInput = {
    id?: string;
    token: string;
    name: string;
    username: string;
    userId?: string | null;
    teamId?: string | null;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    subscribers?: SubscriberUncheckedCreateNestedManyWithoutBotInput;
    broadcasts?: BroadcastUncheckedCreateNestedManyWithoutBotInput;
  };

  export type BotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneWithoutBotNestedInput;
    team?: TeamUpdateOneWithoutBotsNestedInput;
    subscribers?: SubscriberUpdateManyWithoutBotNestedInput;
    broadcasts?: BroadcastUpdateManyWithoutBotNestedInput;
  };

  export type BotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    userId?: NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: NullableStringFieldUpdateOperationsInput | string | null;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subscribers?: SubscriberUncheckedUpdateManyWithoutBotNestedInput;
    broadcasts?: BroadcastUncheckedUpdateManyWithoutBotNestedInput;
  };

  export type BotCreateManyInput = {
    id?: string;
    token: string;
    name: string;
    username: string;
    userId?: string | null;
    teamId?: string | null;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type BotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    userId?: NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: NullableStringFieldUpdateOperationsInput | string | null;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubscriberCreateInput = {
    id?: string;
    chatId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    createdAt?: Date | string;
    bot: BotCreateNestedOneWithoutSubscribersInput;
  };

  export type SubscriberUncheckedCreateInput = {
    id?: string;
    chatId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    botId: string;
    createdAt?: Date | string;
  };

  export type SubscriberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    chatId?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bot?: BotUpdateOneRequiredWithoutSubscribersNestedInput;
  };

  export type SubscriberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    chatId?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    botId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubscriberCreateManyInput = {
    id?: string;
    chatId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    botId: string;
    createdAt?: Date | string;
  };

  export type SubscriberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    chatId?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubscriberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    chatId?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    botId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BroadcastCreateInput = {
    id?: string;
    message: string;
    successCount?: number;
    createdAt?: Date | string;
    bot: BotCreateNestedOneWithoutBroadcastsInput;
  };

  export type BroadcastUncheckedCreateInput = {
    id?: string;
    message: string;
    botId: string;
    successCount?: number;
    createdAt?: Date | string;
  };

  export type BroadcastUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    successCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bot?: BotUpdateOneRequiredWithoutBroadcastsNestedInput;
  };

  export type BroadcastUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    botId?: StringFieldUpdateOperationsInput | string;
    successCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BroadcastCreateManyInput = {
    id?: string;
    message: string;
    botId: string;
    successCount?: number;
    createdAt?: Date | string;
  };

  export type BroadcastUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    successCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BroadcastUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    botId?: StringFieldUpdateOperationsInput | string;
    successCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FeedbackCreateInput = {
    id?: string;
    message: string;
    email?: string | null;
    createdAt?: Date | string;
    user?: UserCreateNestedOneWithoutFeedbackInput;
  };

  export type FeedbackUncheckedCreateInput = {
    id?: string;
    message: string;
    email?: string | null;
    userId?: string | null;
    createdAt?: Date | string;
  };

  export type FeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneWithoutFeedbackNestedInput;
  };

  export type FeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FeedbackCreateManyInput = {
    id?: string;
    message: string;
    email?: string | null;
    userId?: string | null;
    createdAt?: Date | string;
  };

  export type FeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type BotListRelationFilter = {
    every?: BotWhereInput;
    some?: BotWhereInput;
    none?: BotWhereInput;
  };

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput;
    some?: FeedbackWhereInput;
    none?: FeedbackWhereInput;
  };

  export type TeamMemberListRelationFilter = {
    every?: TeamMemberWhereInput;
    some?: TeamMemberWhereInput;
    none?: TeamMemberWhereInput;
  };

  export type TeamListRelationFilter = {
    every?: TeamWhereInput;
    some?: TeamWhereInput;
    none?: TeamWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type BotOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TeamMemberOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    profileImg?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    profileImg?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    profileImg?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    ownerId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    ownerId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    ownerId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumTeamMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamMemberRole | EnumTeamMemberRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.TeamMemberRole[] | ListEnumTeamMemberRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TeamMemberRole[] | ListEnumTeamMemberRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumTeamMemberRoleFilter<$PrismaModel> | $Enums.TeamMemberRole;
  };

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput;
    isNot?: TeamWhereInput;
  };

  export type TeamMemberCountOrderByAggregateInput = {
    id?: SortOrder;
    teamId?: SortOrder;
    userId?: SortOrder;
    role?: SortOrder;
  };

  export type TeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder;
    teamId?: SortOrder;
    userId?: SortOrder;
    role?: SortOrder;
  };

  export type TeamMemberMinOrderByAggregateInput = {
    id?: SortOrder;
    teamId?: SortOrder;
    userId?: SortOrder;
    role?: SortOrder;
  };

  export type EnumTeamMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamMemberRole | EnumTeamMemberRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.TeamMemberRole[] | ListEnumTeamMemberRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TeamMemberRole[] | ListEnumTeamMemberRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumTeamMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.TeamMemberRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTeamMemberRoleFilter<$PrismaModel>;
    _max?: NestedEnumTeamMemberRoleFilter<$PrismaModel>;
  };
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
  };

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null;
    isNot?: UserWhereInput | null;
  };

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null;
    isNot?: TeamWhereInput | null;
  };

  export type SubscriberListRelationFilter = {
    every?: SubscriberWhereInput;
    some?: SubscriberWhereInput;
    none?: SubscriberWhereInput;
  };

  export type BroadcastListRelationFilter = {
    every?: BroadcastWhereInput;
    some?: BroadcastWhereInput;
    none?: BroadcastWhereInput;
  };

  export type SubscriberOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type BroadcastOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type BotCountOrderByAggregateInput = {
    id?: SortOrder;
    token?: SortOrder;
    name?: SortOrder;
    username?: SortOrder;
    userId?: SortOrder;
    teamId?: SortOrder;
    logicFlow?: SortOrder;
    createdAt?: SortOrder;
  };

  export type BotMaxOrderByAggregateInput = {
    id?: SortOrder;
    token?: SortOrder;
    name?: SortOrder;
    username?: SortOrder;
    userId?: SortOrder;
    teamId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type BotMinOrderByAggregateInput = {
    id?: SortOrder;
    token?: SortOrder;
    name?: SortOrder;
    username?: SortOrder;
    userId?: SortOrder;
    teamId?: SortOrder;
    createdAt?: SortOrder;
  };
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedJsonNullableFilter<$PrismaModel>;
    _max?: NestedJsonNullableFilter<$PrismaModel>;
  };

  export type BotScalarRelationFilter = {
    is?: BotWhereInput;
    isNot?: BotWhereInput;
  };

  export type SubscriberCountOrderByAggregateInput = {
    id?: SortOrder;
    chatId?: SortOrder;
    username?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    botId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type SubscriberMaxOrderByAggregateInput = {
    id?: SortOrder;
    chatId?: SortOrder;
    username?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    botId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type SubscriberMinOrderByAggregateInput = {
    id?: SortOrder;
    chatId?: SortOrder;
    username?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    botId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type BroadcastCountOrderByAggregateInput = {
    id?: SortOrder;
    message?: SortOrder;
    botId?: SortOrder;
    successCount?: SortOrder;
    createdAt?: SortOrder;
  };

  export type BroadcastAvgOrderByAggregateInput = {
    successCount?: SortOrder;
  };

  export type BroadcastMaxOrderByAggregateInput = {
    id?: SortOrder;
    message?: SortOrder;
    botId?: SortOrder;
    successCount?: SortOrder;
    createdAt?: SortOrder;
  };

  export type BroadcastMinOrderByAggregateInput = {
    id?: SortOrder;
    message?: SortOrder;
    botId?: SortOrder;
    successCount?: SortOrder;
    createdAt?: SortOrder;
  };

  export type BroadcastSumOrderByAggregateInput = {
    successCount?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder;
    message?: SortOrder;
    email?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder;
    message?: SortOrder;
    email?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder;
    message?: SortOrder;
    email?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type BotCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<BotCreateWithoutUserInput, BotUncheckedCreateWithoutUserInput>
      | BotCreateWithoutUserInput[]
      | BotUncheckedCreateWithoutUserInput[];
    connectOrCreate?: BotCreateOrConnectWithoutUserInput | BotCreateOrConnectWithoutUserInput[];
    createMany?: BotCreateManyUserInputEnvelope;
    connect?: BotWhereUniqueInput | BotWhereUniqueInput[];
  };

  export type FeedbackCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
      | FeedbackCreateWithoutUserInput[]
      | FeedbackUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FeedbackCreateOrConnectWithoutUserInput
      | FeedbackCreateOrConnectWithoutUserInput[];
    createMany?: FeedbackCreateManyUserInputEnvelope;
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
  };

  export type TeamMemberCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
      | TeamMemberCreateWithoutUserInput[]
      | TeamMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TeamMemberCreateOrConnectWithoutUserInput
      | TeamMemberCreateOrConnectWithoutUserInput[];
    createMany?: TeamMemberCreateManyUserInputEnvelope;
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
  };

  export type TeamCreateNestedManyWithoutOwnerInput = {
    create?:
      | XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput>
      | TeamCreateWithoutOwnerInput[]
      | TeamUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: TeamCreateOrConnectWithoutOwnerInput | TeamCreateOrConnectWithoutOwnerInput[];
    createMany?: TeamCreateManyOwnerInputEnvelope;
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
  };

  export type BotUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<BotCreateWithoutUserInput, BotUncheckedCreateWithoutUserInput>
      | BotCreateWithoutUserInput[]
      | BotUncheckedCreateWithoutUserInput[];
    connectOrCreate?: BotCreateOrConnectWithoutUserInput | BotCreateOrConnectWithoutUserInput[];
    createMany?: BotCreateManyUserInputEnvelope;
    connect?: BotWhereUniqueInput | BotWhereUniqueInput[];
  };

  export type FeedbackUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
      | FeedbackCreateWithoutUserInput[]
      | FeedbackUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FeedbackCreateOrConnectWithoutUserInput
      | FeedbackCreateOrConnectWithoutUserInput[];
    createMany?: FeedbackCreateManyUserInputEnvelope;
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
  };

  export type TeamMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
      | TeamMemberCreateWithoutUserInput[]
      | TeamMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TeamMemberCreateOrConnectWithoutUserInput
      | TeamMemberCreateOrConnectWithoutUserInput[];
    createMany?: TeamMemberCreateManyUserInputEnvelope;
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
  };

  export type TeamUncheckedCreateNestedManyWithoutOwnerInput = {
    create?:
      | XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput>
      | TeamCreateWithoutOwnerInput[]
      | TeamUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: TeamCreateOrConnectWithoutOwnerInput | TeamCreateOrConnectWithoutOwnerInput[];
    createMany?: TeamCreateManyOwnerInputEnvelope;
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type BotUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<BotCreateWithoutUserInput, BotUncheckedCreateWithoutUserInput>
      | BotCreateWithoutUserInput[]
      | BotUncheckedCreateWithoutUserInput[];
    connectOrCreate?: BotCreateOrConnectWithoutUserInput | BotCreateOrConnectWithoutUserInput[];
    upsert?: BotUpsertWithWhereUniqueWithoutUserInput | BotUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: BotCreateManyUserInputEnvelope;
    set?: BotWhereUniqueInput | BotWhereUniqueInput[];
    disconnect?: BotWhereUniqueInput | BotWhereUniqueInput[];
    delete?: BotWhereUniqueInput | BotWhereUniqueInput[];
    connect?: BotWhereUniqueInput | BotWhereUniqueInput[];
    update?: BotUpdateWithWhereUniqueWithoutUserInput | BotUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: BotUpdateManyWithWhereWithoutUserInput | BotUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: BotScalarWhereInput | BotScalarWhereInput[];
  };

  export type FeedbackUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
      | FeedbackCreateWithoutUserInput[]
      | FeedbackUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FeedbackCreateOrConnectWithoutUserInput
      | FeedbackCreateOrConnectWithoutUserInput[];
    upsert?:
      | FeedbackUpsertWithWhereUniqueWithoutUserInput
      | FeedbackUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: FeedbackCreateManyUserInputEnvelope;
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    update?:
      | FeedbackUpdateWithWhereUniqueWithoutUserInput
      | FeedbackUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | FeedbackUpdateManyWithWhereWithoutUserInput
      | FeedbackUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[];
  };

  export type TeamMemberUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
      | TeamMemberCreateWithoutUserInput[]
      | TeamMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TeamMemberCreateOrConnectWithoutUserInput
      | TeamMemberCreateOrConnectWithoutUserInput[];
    upsert?:
      | TeamMemberUpsertWithWhereUniqueWithoutUserInput
      | TeamMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: TeamMemberCreateManyUserInputEnvelope;
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
    update?:
      | TeamMemberUpdateWithWhereUniqueWithoutUserInput
      | TeamMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | TeamMemberUpdateManyWithWhereWithoutUserInput
      | TeamMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[];
  };

  export type TeamUpdateManyWithoutOwnerNestedInput = {
    create?:
      | XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput>
      | TeamCreateWithoutOwnerInput[]
      | TeamUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: TeamCreateOrConnectWithoutOwnerInput | TeamCreateOrConnectWithoutOwnerInput[];
    upsert?:
      | TeamUpsertWithWhereUniqueWithoutOwnerInput
      | TeamUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: TeamCreateManyOwnerInputEnvelope;
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
    update?:
      | TeamUpdateWithWhereUniqueWithoutOwnerInput
      | TeamUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?:
      | TeamUpdateManyWithWhereWithoutOwnerInput
      | TeamUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[];
  };

  export type BotUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<BotCreateWithoutUserInput, BotUncheckedCreateWithoutUserInput>
      | BotCreateWithoutUserInput[]
      | BotUncheckedCreateWithoutUserInput[];
    connectOrCreate?: BotCreateOrConnectWithoutUserInput | BotCreateOrConnectWithoutUserInput[];
    upsert?: BotUpsertWithWhereUniqueWithoutUserInput | BotUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: BotCreateManyUserInputEnvelope;
    set?: BotWhereUniqueInput | BotWhereUniqueInput[];
    disconnect?: BotWhereUniqueInput | BotWhereUniqueInput[];
    delete?: BotWhereUniqueInput | BotWhereUniqueInput[];
    connect?: BotWhereUniqueInput | BotWhereUniqueInput[];
    update?: BotUpdateWithWhereUniqueWithoutUserInput | BotUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: BotUpdateManyWithWhereWithoutUserInput | BotUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: BotScalarWhereInput | BotScalarWhereInput[];
  };

  export type FeedbackUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
      | FeedbackCreateWithoutUserInput[]
      | FeedbackUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FeedbackCreateOrConnectWithoutUserInput
      | FeedbackCreateOrConnectWithoutUserInput[];
    upsert?:
      | FeedbackUpsertWithWhereUniqueWithoutUserInput
      | FeedbackUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: FeedbackCreateManyUserInputEnvelope;
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    update?:
      | FeedbackUpdateWithWhereUniqueWithoutUserInput
      | FeedbackUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | FeedbackUpdateManyWithWhereWithoutUserInput
      | FeedbackUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[];
  };

  export type TeamMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
      | TeamMemberCreateWithoutUserInput[]
      | TeamMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TeamMemberCreateOrConnectWithoutUserInput
      | TeamMemberCreateOrConnectWithoutUserInput[];
    upsert?:
      | TeamMemberUpsertWithWhereUniqueWithoutUserInput
      | TeamMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: TeamMemberCreateManyUserInputEnvelope;
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
    update?:
      | TeamMemberUpdateWithWhereUniqueWithoutUserInput
      | TeamMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | TeamMemberUpdateManyWithWhereWithoutUserInput
      | TeamMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[];
  };

  export type TeamUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?:
      | XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput>
      | TeamCreateWithoutOwnerInput[]
      | TeamUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: TeamCreateOrConnectWithoutOwnerInput | TeamCreateOrConnectWithoutOwnerInput[];
    upsert?:
      | TeamUpsertWithWhereUniqueWithoutOwnerInput
      | TeamUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: TeamCreateManyOwnerInputEnvelope;
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
    update?:
      | TeamUpdateWithWhereUniqueWithoutOwnerInput
      | TeamUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?:
      | TeamUpdateManyWithWhereWithoutOwnerInput
      | TeamUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutTeamsOwnedInput = {
    create?: XOR<UserCreateWithoutTeamsOwnedInput, UserUncheckedCreateWithoutTeamsOwnedInput>;
    connectOrCreate?: UserCreateOrConnectWithoutTeamsOwnedInput;
    connect?: UserWhereUniqueInput;
  };

  export type TeamMemberCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
      | TeamMemberCreateWithoutTeamInput[]
      | TeamMemberUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | TeamMemberCreateOrConnectWithoutTeamInput
      | TeamMemberCreateOrConnectWithoutTeamInput[];
    createMany?: TeamMemberCreateManyTeamInputEnvelope;
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
  };

  export type BotCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<BotCreateWithoutTeamInput, BotUncheckedCreateWithoutTeamInput>
      | BotCreateWithoutTeamInput[]
      | BotUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: BotCreateOrConnectWithoutTeamInput | BotCreateOrConnectWithoutTeamInput[];
    createMany?: BotCreateManyTeamInputEnvelope;
    connect?: BotWhereUniqueInput | BotWhereUniqueInput[];
  };

  export type TeamMemberUncheckedCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
      | TeamMemberCreateWithoutTeamInput[]
      | TeamMemberUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | TeamMemberCreateOrConnectWithoutTeamInput
      | TeamMemberCreateOrConnectWithoutTeamInput[];
    createMany?: TeamMemberCreateManyTeamInputEnvelope;
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
  };

  export type BotUncheckedCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<BotCreateWithoutTeamInput, BotUncheckedCreateWithoutTeamInput>
      | BotCreateWithoutTeamInput[]
      | BotUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: BotCreateOrConnectWithoutTeamInput | BotCreateOrConnectWithoutTeamInput[];
    createMany?: BotCreateManyTeamInputEnvelope;
    connect?: BotWhereUniqueInput | BotWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutTeamsOwnedNestedInput = {
    create?: XOR<UserCreateWithoutTeamsOwnedInput, UserUncheckedCreateWithoutTeamsOwnedInput>;
    connectOrCreate?: UserCreateOrConnectWithoutTeamsOwnedInput;
    upsert?: UserUpsertWithoutTeamsOwnedInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutTeamsOwnedInput, UserUpdateWithoutTeamsOwnedInput>,
      UserUncheckedUpdateWithoutTeamsOwnedInput
    >;
  };

  export type TeamMemberUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
      | TeamMemberCreateWithoutTeamInput[]
      | TeamMemberUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | TeamMemberCreateOrConnectWithoutTeamInput
      | TeamMemberCreateOrConnectWithoutTeamInput[];
    upsert?:
      | TeamMemberUpsertWithWhereUniqueWithoutTeamInput
      | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: TeamMemberCreateManyTeamInputEnvelope;
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
    update?:
      | TeamMemberUpdateWithWhereUniqueWithoutTeamInput
      | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?:
      | TeamMemberUpdateManyWithWhereWithoutTeamInput
      | TeamMemberUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[];
  };

  export type BotUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<BotCreateWithoutTeamInput, BotUncheckedCreateWithoutTeamInput>
      | BotCreateWithoutTeamInput[]
      | BotUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: BotCreateOrConnectWithoutTeamInput | BotCreateOrConnectWithoutTeamInput[];
    upsert?: BotUpsertWithWhereUniqueWithoutTeamInput | BotUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: BotCreateManyTeamInputEnvelope;
    set?: BotWhereUniqueInput | BotWhereUniqueInput[];
    disconnect?: BotWhereUniqueInput | BotWhereUniqueInput[];
    delete?: BotWhereUniqueInput | BotWhereUniqueInput[];
    connect?: BotWhereUniqueInput | BotWhereUniqueInput[];
    update?: BotUpdateWithWhereUniqueWithoutTeamInput | BotUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: BotUpdateManyWithWhereWithoutTeamInput | BotUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: BotScalarWhereInput | BotScalarWhereInput[];
  };

  export type TeamMemberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
      | TeamMemberCreateWithoutTeamInput[]
      | TeamMemberUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | TeamMemberCreateOrConnectWithoutTeamInput
      | TeamMemberCreateOrConnectWithoutTeamInput[];
    upsert?:
      | TeamMemberUpsertWithWhereUniqueWithoutTeamInput
      | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: TeamMemberCreateManyTeamInputEnvelope;
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[];
    update?:
      | TeamMemberUpdateWithWhereUniqueWithoutTeamInput
      | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?:
      | TeamMemberUpdateManyWithWhereWithoutTeamInput
      | TeamMemberUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[];
  };

  export type BotUncheckedUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<BotCreateWithoutTeamInput, BotUncheckedCreateWithoutTeamInput>
      | BotCreateWithoutTeamInput[]
      | BotUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: BotCreateOrConnectWithoutTeamInput | BotCreateOrConnectWithoutTeamInput[];
    upsert?: BotUpsertWithWhereUniqueWithoutTeamInput | BotUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: BotCreateManyTeamInputEnvelope;
    set?: BotWhereUniqueInput | BotWhereUniqueInput[];
    disconnect?: BotWhereUniqueInput | BotWhereUniqueInput[];
    delete?: BotWhereUniqueInput | BotWhereUniqueInput[];
    connect?: BotWhereUniqueInput | BotWhereUniqueInput[];
    update?: BotUpdateWithWhereUniqueWithoutTeamInput | BotUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: BotUpdateManyWithWhereWithoutTeamInput | BotUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: BotScalarWhereInput | BotScalarWhereInput[];
  };

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput;
    connect?: TeamWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutTeamsInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>;
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnumTeamMemberRoleFieldUpdateOperationsInput = {
    set?: $Enums.TeamMemberRole;
  };

  export type TeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput;
    upsert?: TeamUpsertWithoutMembersInput;
    connect?: TeamWhereUniqueInput;
    update?: XOR<
      XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>,
      TeamUncheckedUpdateWithoutMembersInput
    >;
  };

  export type UserUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>;
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput;
    upsert?: UserUpsertWithoutTeamsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutTeamsInput, UserUpdateWithoutTeamsInput>,
      UserUncheckedUpdateWithoutTeamsInput
    >;
  };

  export type UserCreateNestedOneWithoutBotInput = {
    create?: XOR<UserCreateWithoutBotInput, UserUncheckedCreateWithoutBotInput>;
    connectOrCreate?: UserCreateOrConnectWithoutBotInput;
    connect?: UserWhereUniqueInput;
  };

  export type TeamCreateNestedOneWithoutBotsInput = {
    create?: XOR<TeamCreateWithoutBotsInput, TeamUncheckedCreateWithoutBotsInput>;
    connectOrCreate?: TeamCreateOrConnectWithoutBotsInput;
    connect?: TeamWhereUniqueInput;
  };

  export type SubscriberCreateNestedManyWithoutBotInput = {
    create?:
      | XOR<SubscriberCreateWithoutBotInput, SubscriberUncheckedCreateWithoutBotInput>
      | SubscriberCreateWithoutBotInput[]
      | SubscriberUncheckedCreateWithoutBotInput[];
    connectOrCreate?:
      | SubscriberCreateOrConnectWithoutBotInput
      | SubscriberCreateOrConnectWithoutBotInput[];
    createMany?: SubscriberCreateManyBotInputEnvelope;
    connect?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[];
  };

  export type BroadcastCreateNestedManyWithoutBotInput = {
    create?:
      | XOR<BroadcastCreateWithoutBotInput, BroadcastUncheckedCreateWithoutBotInput>
      | BroadcastCreateWithoutBotInput[]
      | BroadcastUncheckedCreateWithoutBotInput[];
    connectOrCreate?:
      | BroadcastCreateOrConnectWithoutBotInput
      | BroadcastCreateOrConnectWithoutBotInput[];
    createMany?: BroadcastCreateManyBotInputEnvelope;
    connect?: BroadcastWhereUniqueInput | BroadcastWhereUniqueInput[];
  };

  export type SubscriberUncheckedCreateNestedManyWithoutBotInput = {
    create?:
      | XOR<SubscriberCreateWithoutBotInput, SubscriberUncheckedCreateWithoutBotInput>
      | SubscriberCreateWithoutBotInput[]
      | SubscriberUncheckedCreateWithoutBotInput[];
    connectOrCreate?:
      | SubscriberCreateOrConnectWithoutBotInput
      | SubscriberCreateOrConnectWithoutBotInput[];
    createMany?: SubscriberCreateManyBotInputEnvelope;
    connect?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[];
  };

  export type BroadcastUncheckedCreateNestedManyWithoutBotInput = {
    create?:
      | XOR<BroadcastCreateWithoutBotInput, BroadcastUncheckedCreateWithoutBotInput>
      | BroadcastCreateWithoutBotInput[]
      | BroadcastUncheckedCreateWithoutBotInput[];
    connectOrCreate?:
      | BroadcastCreateOrConnectWithoutBotInput
      | BroadcastCreateOrConnectWithoutBotInput[];
    createMany?: BroadcastCreateManyBotInputEnvelope;
    connect?: BroadcastWhereUniqueInput | BroadcastWhereUniqueInput[];
  };

  export type UserUpdateOneWithoutBotNestedInput = {
    create?: XOR<UserCreateWithoutBotInput, UserUncheckedCreateWithoutBotInput>;
    connectOrCreate?: UserCreateOrConnectWithoutBotInput;
    upsert?: UserUpsertWithoutBotInput;
    disconnect?: UserWhereInput | boolean;
    delete?: UserWhereInput | boolean;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutBotInput, UserUpdateWithoutBotInput>,
      UserUncheckedUpdateWithoutBotInput
    >;
  };

  export type TeamUpdateOneWithoutBotsNestedInput = {
    create?: XOR<TeamCreateWithoutBotsInput, TeamUncheckedCreateWithoutBotsInput>;
    connectOrCreate?: TeamCreateOrConnectWithoutBotsInput;
    upsert?: TeamUpsertWithoutBotsInput;
    disconnect?: TeamWhereInput | boolean;
    delete?: TeamWhereInput | boolean;
    connect?: TeamWhereUniqueInput;
    update?: XOR<
      XOR<TeamUpdateToOneWithWhereWithoutBotsInput, TeamUpdateWithoutBotsInput>,
      TeamUncheckedUpdateWithoutBotsInput
    >;
  };

  export type SubscriberUpdateManyWithoutBotNestedInput = {
    create?:
      | XOR<SubscriberCreateWithoutBotInput, SubscriberUncheckedCreateWithoutBotInput>
      | SubscriberCreateWithoutBotInput[]
      | SubscriberUncheckedCreateWithoutBotInput[];
    connectOrCreate?:
      | SubscriberCreateOrConnectWithoutBotInput
      | SubscriberCreateOrConnectWithoutBotInput[];
    upsert?:
      | SubscriberUpsertWithWhereUniqueWithoutBotInput
      | SubscriberUpsertWithWhereUniqueWithoutBotInput[];
    createMany?: SubscriberCreateManyBotInputEnvelope;
    set?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[];
    disconnect?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[];
    delete?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[];
    connect?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[];
    update?:
      | SubscriberUpdateWithWhereUniqueWithoutBotInput
      | SubscriberUpdateWithWhereUniqueWithoutBotInput[];
    updateMany?:
      | SubscriberUpdateManyWithWhereWithoutBotInput
      | SubscriberUpdateManyWithWhereWithoutBotInput[];
    deleteMany?: SubscriberScalarWhereInput | SubscriberScalarWhereInput[];
  };

  export type BroadcastUpdateManyWithoutBotNestedInput = {
    create?:
      | XOR<BroadcastCreateWithoutBotInput, BroadcastUncheckedCreateWithoutBotInput>
      | BroadcastCreateWithoutBotInput[]
      | BroadcastUncheckedCreateWithoutBotInput[];
    connectOrCreate?:
      | BroadcastCreateOrConnectWithoutBotInput
      | BroadcastCreateOrConnectWithoutBotInput[];
    upsert?:
      | BroadcastUpsertWithWhereUniqueWithoutBotInput
      | BroadcastUpsertWithWhereUniqueWithoutBotInput[];
    createMany?: BroadcastCreateManyBotInputEnvelope;
    set?: BroadcastWhereUniqueInput | BroadcastWhereUniqueInput[];
    disconnect?: BroadcastWhereUniqueInput | BroadcastWhereUniqueInput[];
    delete?: BroadcastWhereUniqueInput | BroadcastWhereUniqueInput[];
    connect?: BroadcastWhereUniqueInput | BroadcastWhereUniqueInput[];
    update?:
      | BroadcastUpdateWithWhereUniqueWithoutBotInput
      | BroadcastUpdateWithWhereUniqueWithoutBotInput[];
    updateMany?:
      | BroadcastUpdateManyWithWhereWithoutBotInput
      | BroadcastUpdateManyWithWhereWithoutBotInput[];
    deleteMany?: BroadcastScalarWhereInput | BroadcastScalarWhereInput[];
  };

  export type SubscriberUncheckedUpdateManyWithoutBotNestedInput = {
    create?:
      | XOR<SubscriberCreateWithoutBotInput, SubscriberUncheckedCreateWithoutBotInput>
      | SubscriberCreateWithoutBotInput[]
      | SubscriberUncheckedCreateWithoutBotInput[];
    connectOrCreate?:
      | SubscriberCreateOrConnectWithoutBotInput
      | SubscriberCreateOrConnectWithoutBotInput[];
    upsert?:
      | SubscriberUpsertWithWhereUniqueWithoutBotInput
      | SubscriberUpsertWithWhereUniqueWithoutBotInput[];
    createMany?: SubscriberCreateManyBotInputEnvelope;
    set?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[];
    disconnect?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[];
    delete?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[];
    connect?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[];
    update?:
      | SubscriberUpdateWithWhereUniqueWithoutBotInput
      | SubscriberUpdateWithWhereUniqueWithoutBotInput[];
    updateMany?:
      | SubscriberUpdateManyWithWhereWithoutBotInput
      | SubscriberUpdateManyWithWhereWithoutBotInput[];
    deleteMany?: SubscriberScalarWhereInput | SubscriberScalarWhereInput[];
  };

  export type BroadcastUncheckedUpdateManyWithoutBotNestedInput = {
    create?:
      | XOR<BroadcastCreateWithoutBotInput, BroadcastUncheckedCreateWithoutBotInput>
      | BroadcastCreateWithoutBotInput[]
      | BroadcastUncheckedCreateWithoutBotInput[];
    connectOrCreate?:
      | BroadcastCreateOrConnectWithoutBotInput
      | BroadcastCreateOrConnectWithoutBotInput[];
    upsert?:
      | BroadcastUpsertWithWhereUniqueWithoutBotInput
      | BroadcastUpsertWithWhereUniqueWithoutBotInput[];
    createMany?: BroadcastCreateManyBotInputEnvelope;
    set?: BroadcastWhereUniqueInput | BroadcastWhereUniqueInput[];
    disconnect?: BroadcastWhereUniqueInput | BroadcastWhereUniqueInput[];
    delete?: BroadcastWhereUniqueInput | BroadcastWhereUniqueInput[];
    connect?: BroadcastWhereUniqueInput | BroadcastWhereUniqueInput[];
    update?:
      | BroadcastUpdateWithWhereUniqueWithoutBotInput
      | BroadcastUpdateWithWhereUniqueWithoutBotInput[];
    updateMany?:
      | BroadcastUpdateManyWithWhereWithoutBotInput
      | BroadcastUpdateManyWithWhereWithoutBotInput[];
    deleteMany?: BroadcastScalarWhereInput | BroadcastScalarWhereInput[];
  };

  export type BotCreateNestedOneWithoutSubscribersInput = {
    create?: XOR<BotCreateWithoutSubscribersInput, BotUncheckedCreateWithoutSubscribersInput>;
    connectOrCreate?: BotCreateOrConnectWithoutSubscribersInput;
    connect?: BotWhereUniqueInput;
  };

  export type BotUpdateOneRequiredWithoutSubscribersNestedInput = {
    create?: XOR<BotCreateWithoutSubscribersInput, BotUncheckedCreateWithoutSubscribersInput>;
    connectOrCreate?: BotCreateOrConnectWithoutSubscribersInput;
    upsert?: BotUpsertWithoutSubscribersInput;
    connect?: BotWhereUniqueInput;
    update?: XOR<
      XOR<BotUpdateToOneWithWhereWithoutSubscribersInput, BotUpdateWithoutSubscribersInput>,
      BotUncheckedUpdateWithoutSubscribersInput
    >;
  };

  export type BotCreateNestedOneWithoutBroadcastsInput = {
    create?: XOR<BotCreateWithoutBroadcastsInput, BotUncheckedCreateWithoutBroadcastsInput>;
    connectOrCreate?: BotCreateOrConnectWithoutBroadcastsInput;
    connect?: BotWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type BotUpdateOneRequiredWithoutBroadcastsNestedInput = {
    create?: XOR<BotCreateWithoutBroadcastsInput, BotUncheckedCreateWithoutBroadcastsInput>;
    connectOrCreate?: BotCreateOrConnectWithoutBroadcastsInput;
    upsert?: BotUpsertWithoutBroadcastsInput;
    connect?: BotWhereUniqueInput;
    update?: XOR<
      XOR<BotUpdateToOneWithWhereWithoutBroadcastsInput, BotUpdateWithoutBroadcastsInput>,
      BotUncheckedUpdateWithoutBroadcastsInput
    >;
  };

  export type UserCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>;
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneWithoutFeedbackNestedInput = {
    create?: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>;
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackInput;
    upsert?: UserUpsertWithoutFeedbackInput;
    disconnect?: UserWhereInput | boolean;
    delete?: UserWhereInput | boolean;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutFeedbackInput, UserUpdateWithoutFeedbackInput>,
      UserUncheckedUpdateWithoutFeedbackInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedEnumTeamMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamMemberRole | EnumTeamMemberRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.TeamMemberRole[] | ListEnumTeamMemberRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TeamMemberRole[] | ListEnumTeamMemberRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumTeamMemberRoleFilter<$PrismaModel> | $Enums.TeamMemberRole;
  };

  export type NestedEnumTeamMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamMemberRole | EnumTeamMemberRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.TeamMemberRole[] | ListEnumTeamMemberRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TeamMemberRole[] | ListEnumTeamMemberRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumTeamMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.TeamMemberRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTeamMemberRoleFilter<$PrismaModel>;
    _max?: NestedEnumTeamMemberRoleFilter<$PrismaModel>;
  };
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type BotCreateWithoutUserInput = {
    id?: string;
    token: string;
    name: string;
    username: string;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    team?: TeamCreateNestedOneWithoutBotsInput;
    subscribers?: SubscriberCreateNestedManyWithoutBotInput;
    broadcasts?: BroadcastCreateNestedManyWithoutBotInput;
  };

  export type BotUncheckedCreateWithoutUserInput = {
    id?: string;
    token: string;
    name: string;
    username: string;
    teamId?: string | null;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    subscribers?: SubscriberUncheckedCreateNestedManyWithoutBotInput;
    broadcasts?: BroadcastUncheckedCreateNestedManyWithoutBotInput;
  };

  export type BotCreateOrConnectWithoutUserInput = {
    where: BotWhereUniqueInput;
    create: XOR<BotCreateWithoutUserInput, BotUncheckedCreateWithoutUserInput>;
  };

  export type BotCreateManyUserInputEnvelope = {
    data: BotCreateManyUserInput | BotCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type FeedbackCreateWithoutUserInput = {
    id?: string;
    message: string;
    email?: string | null;
    createdAt?: Date | string;
  };

  export type FeedbackUncheckedCreateWithoutUserInput = {
    id?: string;
    message: string;
    email?: string | null;
    createdAt?: Date | string;
  };

  export type FeedbackCreateOrConnectWithoutUserInput = {
    where: FeedbackWhereUniqueInput;
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>;
  };

  export type FeedbackCreateManyUserInputEnvelope = {
    data: FeedbackCreateManyUserInput | FeedbackCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type TeamMemberCreateWithoutUserInput = {
    id?: string;
    role: $Enums.TeamMemberRole;
    team: TeamCreateNestedOneWithoutMembersInput;
  };

  export type TeamMemberUncheckedCreateWithoutUserInput = {
    id?: string;
    teamId: string;
    role: $Enums.TeamMemberRole;
  };

  export type TeamMemberCreateOrConnectWithoutUserInput = {
    where: TeamMemberWhereUniqueInput;
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>;
  };

  export type TeamMemberCreateManyUserInputEnvelope = {
    data: TeamMemberCreateManyUserInput | TeamMemberCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type TeamCreateWithoutOwnerInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: TeamMemberCreateNestedManyWithoutTeamInput;
    bots?: BotCreateNestedManyWithoutTeamInput;
  };

  export type TeamUncheckedCreateWithoutOwnerInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput;
    bots?: BotUncheckedCreateNestedManyWithoutTeamInput;
  };

  export type TeamCreateOrConnectWithoutOwnerInput = {
    where: TeamWhereUniqueInput;
    create: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput>;
  };

  export type TeamCreateManyOwnerInputEnvelope = {
    data: TeamCreateManyOwnerInput | TeamCreateManyOwnerInput[];
    skipDuplicates?: boolean;
  };

  export type BotUpsertWithWhereUniqueWithoutUserInput = {
    where: BotWhereUniqueInput;
    update: XOR<BotUpdateWithoutUserInput, BotUncheckedUpdateWithoutUserInput>;
    create: XOR<BotCreateWithoutUserInput, BotUncheckedCreateWithoutUserInput>;
  };

  export type BotUpdateWithWhereUniqueWithoutUserInput = {
    where: BotWhereUniqueInput;
    data: XOR<BotUpdateWithoutUserInput, BotUncheckedUpdateWithoutUserInput>;
  };

  export type BotUpdateManyWithWhereWithoutUserInput = {
    where: BotScalarWhereInput;
    data: XOR<BotUpdateManyMutationInput, BotUncheckedUpdateManyWithoutUserInput>;
  };

  export type BotScalarWhereInput = {
    AND?: BotScalarWhereInput | BotScalarWhereInput[];
    OR?: BotScalarWhereInput[];
    NOT?: BotScalarWhereInput | BotScalarWhereInput[];
    id?: StringFilter<'Bot'> | string;
    token?: StringFilter<'Bot'> | string;
    name?: StringFilter<'Bot'> | string;
    username?: StringFilter<'Bot'> | string;
    userId?: StringNullableFilter<'Bot'> | string | null;
    teamId?: StringNullableFilter<'Bot'> | string | null;
    logicFlow?: JsonNullableFilter<'Bot'>;
    createdAt?: DateTimeFilter<'Bot'> | Date | string;
  };

  export type FeedbackUpsertWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput;
    update: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>;
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>;
  };

  export type FeedbackUpdateWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput;
    data: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>;
  };

  export type FeedbackUpdateManyWithWhereWithoutUserInput = {
    where: FeedbackScalarWhereInput;
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutUserInput>;
  };

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[];
    OR?: FeedbackScalarWhereInput[];
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[];
    id?: StringFilter<'Feedback'> | string;
    message?: StringFilter<'Feedback'> | string;
    email?: StringNullableFilter<'Feedback'> | string | null;
    userId?: StringNullableFilter<'Feedback'> | string | null;
    createdAt?: DateTimeFilter<'Feedback'> | Date | string;
  };

  export type TeamMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput;
    update: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>;
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>;
  };

  export type TeamMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput;
    data: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>;
  };

  export type TeamMemberUpdateManyWithWhereWithoutUserInput = {
    where: TeamMemberScalarWhereInput;
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutUserInput>;
  };

  export type TeamMemberScalarWhereInput = {
    AND?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[];
    OR?: TeamMemberScalarWhereInput[];
    NOT?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[];
    id?: StringFilter<'TeamMember'> | string;
    teamId?: StringFilter<'TeamMember'> | string;
    userId?: StringFilter<'TeamMember'> | string;
    role?: EnumTeamMemberRoleFilter<'TeamMember'> | $Enums.TeamMemberRole;
  };

  export type TeamUpsertWithWhereUniqueWithoutOwnerInput = {
    where: TeamWhereUniqueInput;
    update: XOR<TeamUpdateWithoutOwnerInput, TeamUncheckedUpdateWithoutOwnerInput>;
    create: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput>;
  };

  export type TeamUpdateWithWhereUniqueWithoutOwnerInput = {
    where: TeamWhereUniqueInput;
    data: XOR<TeamUpdateWithoutOwnerInput, TeamUncheckedUpdateWithoutOwnerInput>;
  };

  export type TeamUpdateManyWithWhereWithoutOwnerInput = {
    where: TeamScalarWhereInput;
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutOwnerInput>;
  };

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[];
    OR?: TeamScalarWhereInput[];
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[];
    id?: StringFilter<'Team'> | string;
    name?: StringFilter<'Team'> | string;
    ownerId?: StringFilter<'Team'> | string;
    createdAt?: DateTimeFilter<'Team'> | Date | string;
    updatedAt?: DateTimeFilter<'Team'> | Date | string;
  };

  export type UserCreateWithoutTeamsOwnedInput = {
    id?: string;
    username: string;
    password: string;
    profileImg?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bot?: BotCreateNestedManyWithoutUserInput;
    feedback?: FeedbackCreateNestedManyWithoutUserInput;
    teams?: TeamMemberCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutTeamsOwnedInput = {
    id?: string;
    username: string;
    password: string;
    profileImg?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bot?: BotUncheckedCreateNestedManyWithoutUserInput;
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput;
    teams?: TeamMemberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutTeamsOwnedInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutTeamsOwnedInput, UserUncheckedCreateWithoutTeamsOwnedInput>;
  };

  export type TeamMemberCreateWithoutTeamInput = {
    id?: string;
    role: $Enums.TeamMemberRole;
    user: UserCreateNestedOneWithoutTeamsInput;
  };

  export type TeamMemberUncheckedCreateWithoutTeamInput = {
    id?: string;
    userId: string;
    role: $Enums.TeamMemberRole;
  };

  export type TeamMemberCreateOrConnectWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput;
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>;
  };

  export type TeamMemberCreateManyTeamInputEnvelope = {
    data: TeamMemberCreateManyTeamInput | TeamMemberCreateManyTeamInput[];
    skipDuplicates?: boolean;
  };

  export type BotCreateWithoutTeamInput = {
    id?: string;
    token: string;
    name: string;
    username: string;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    user?: UserCreateNestedOneWithoutBotInput;
    subscribers?: SubscriberCreateNestedManyWithoutBotInput;
    broadcasts?: BroadcastCreateNestedManyWithoutBotInput;
  };

  export type BotUncheckedCreateWithoutTeamInput = {
    id?: string;
    token: string;
    name: string;
    username: string;
    userId?: string | null;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    subscribers?: SubscriberUncheckedCreateNestedManyWithoutBotInput;
    broadcasts?: BroadcastUncheckedCreateNestedManyWithoutBotInput;
  };

  export type BotCreateOrConnectWithoutTeamInput = {
    where: BotWhereUniqueInput;
    create: XOR<BotCreateWithoutTeamInput, BotUncheckedCreateWithoutTeamInput>;
  };

  export type BotCreateManyTeamInputEnvelope = {
    data: BotCreateManyTeamInput | BotCreateManyTeamInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutTeamsOwnedInput = {
    update: XOR<UserUpdateWithoutTeamsOwnedInput, UserUncheckedUpdateWithoutTeamsOwnedInput>;
    create: XOR<UserCreateWithoutTeamsOwnedInput, UserUncheckedCreateWithoutTeamsOwnedInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutTeamsOwnedInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutTeamsOwnedInput, UserUncheckedUpdateWithoutTeamsOwnedInput>;
  };

  export type UserUpdateWithoutTeamsOwnedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bot?: BotUpdateManyWithoutUserNestedInput;
    feedback?: FeedbackUpdateManyWithoutUserNestedInput;
    teams?: TeamMemberUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutTeamsOwnedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bot?: BotUncheckedUpdateManyWithoutUserNestedInput;
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput;
    teams?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type TeamMemberUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput;
    update: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>;
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>;
  };

  export type TeamMemberUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput;
    data: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>;
  };

  export type TeamMemberUpdateManyWithWhereWithoutTeamInput = {
    where: TeamMemberScalarWhereInput;
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutTeamInput>;
  };

  export type BotUpsertWithWhereUniqueWithoutTeamInput = {
    where: BotWhereUniqueInput;
    update: XOR<BotUpdateWithoutTeamInput, BotUncheckedUpdateWithoutTeamInput>;
    create: XOR<BotCreateWithoutTeamInput, BotUncheckedCreateWithoutTeamInput>;
  };

  export type BotUpdateWithWhereUniqueWithoutTeamInput = {
    where: BotWhereUniqueInput;
    data: XOR<BotUpdateWithoutTeamInput, BotUncheckedUpdateWithoutTeamInput>;
  };

  export type BotUpdateManyWithWhereWithoutTeamInput = {
    where: BotScalarWhereInput;
    data: XOR<BotUpdateManyMutationInput, BotUncheckedUpdateManyWithoutTeamInput>;
  };

  export type TeamCreateWithoutMembersInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: UserCreateNestedOneWithoutTeamsOwnedInput;
    bots?: BotCreateNestedManyWithoutTeamInput;
  };

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: string;
    name: string;
    ownerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bots?: BotUncheckedCreateNestedManyWithoutTeamInput;
  };

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput;
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>;
  };

  export type UserCreateWithoutTeamsInput = {
    id?: string;
    username: string;
    password: string;
    profileImg?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bot?: BotCreateNestedManyWithoutUserInput;
    feedback?: FeedbackCreateNestedManyWithoutUserInput;
    teamsOwned?: TeamCreateNestedManyWithoutOwnerInput;
  };

  export type UserUncheckedCreateWithoutTeamsInput = {
    id?: string;
    username: string;
    password: string;
    profileImg?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bot?: BotUncheckedCreateNestedManyWithoutUserInput;
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput;
    teamsOwned?: TeamUncheckedCreateNestedManyWithoutOwnerInput;
  };

  export type UserCreateOrConnectWithoutTeamsInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>;
  };

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>;
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>;
    where?: TeamWhereInput;
  };

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput;
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>;
  };

  export type TeamUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: UserUpdateOneRequiredWithoutTeamsOwnedNestedInput;
    bots?: BotUpdateManyWithoutTeamNestedInput;
  };

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    ownerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bots?: BotUncheckedUpdateManyWithoutTeamNestedInput;
  };

  export type UserUpsertWithoutTeamsInput = {
    update: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>;
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutTeamsInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>;
  };

  export type UserUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bot?: BotUpdateManyWithoutUserNestedInput;
    feedback?: FeedbackUpdateManyWithoutUserNestedInput;
    teamsOwned?: TeamUpdateManyWithoutOwnerNestedInput;
  };

  export type UserUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bot?: BotUncheckedUpdateManyWithoutUserNestedInput;
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput;
    teamsOwned?: TeamUncheckedUpdateManyWithoutOwnerNestedInput;
  };

  export type UserCreateWithoutBotInput = {
    id?: string;
    username: string;
    password: string;
    profileImg?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    feedback?: FeedbackCreateNestedManyWithoutUserInput;
    teams?: TeamMemberCreateNestedManyWithoutUserInput;
    teamsOwned?: TeamCreateNestedManyWithoutOwnerInput;
  };

  export type UserUncheckedCreateWithoutBotInput = {
    id?: string;
    username: string;
    password: string;
    profileImg?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput;
    teams?: TeamMemberUncheckedCreateNestedManyWithoutUserInput;
    teamsOwned?: TeamUncheckedCreateNestedManyWithoutOwnerInput;
  };

  export type UserCreateOrConnectWithoutBotInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutBotInput, UserUncheckedCreateWithoutBotInput>;
  };

  export type TeamCreateWithoutBotsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: UserCreateNestedOneWithoutTeamsOwnedInput;
    members?: TeamMemberCreateNestedManyWithoutTeamInput;
  };

  export type TeamUncheckedCreateWithoutBotsInput = {
    id?: string;
    name: string;
    ownerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput;
  };

  export type TeamCreateOrConnectWithoutBotsInput = {
    where: TeamWhereUniqueInput;
    create: XOR<TeamCreateWithoutBotsInput, TeamUncheckedCreateWithoutBotsInput>;
  };

  export type SubscriberCreateWithoutBotInput = {
    id?: string;
    chatId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    createdAt?: Date | string;
  };

  export type SubscriberUncheckedCreateWithoutBotInput = {
    id?: string;
    chatId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    createdAt?: Date | string;
  };

  export type SubscriberCreateOrConnectWithoutBotInput = {
    where: SubscriberWhereUniqueInput;
    create: XOR<SubscriberCreateWithoutBotInput, SubscriberUncheckedCreateWithoutBotInput>;
  };

  export type SubscriberCreateManyBotInputEnvelope = {
    data: SubscriberCreateManyBotInput | SubscriberCreateManyBotInput[];
    skipDuplicates?: boolean;
  };

  export type BroadcastCreateWithoutBotInput = {
    id?: string;
    message: string;
    successCount?: number;
    createdAt?: Date | string;
  };

  export type BroadcastUncheckedCreateWithoutBotInput = {
    id?: string;
    message: string;
    successCount?: number;
    createdAt?: Date | string;
  };

  export type BroadcastCreateOrConnectWithoutBotInput = {
    where: BroadcastWhereUniqueInput;
    create: XOR<BroadcastCreateWithoutBotInput, BroadcastUncheckedCreateWithoutBotInput>;
  };

  export type BroadcastCreateManyBotInputEnvelope = {
    data: BroadcastCreateManyBotInput | BroadcastCreateManyBotInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutBotInput = {
    update: XOR<UserUpdateWithoutBotInput, UserUncheckedUpdateWithoutBotInput>;
    create: XOR<UserCreateWithoutBotInput, UserUncheckedCreateWithoutBotInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutBotInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutBotInput, UserUncheckedUpdateWithoutBotInput>;
  };

  export type UserUpdateWithoutBotInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    feedback?: FeedbackUpdateManyWithoutUserNestedInput;
    teams?: TeamMemberUpdateManyWithoutUserNestedInput;
    teamsOwned?: TeamUpdateManyWithoutOwnerNestedInput;
  };

  export type UserUncheckedUpdateWithoutBotInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput;
    teams?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput;
    teamsOwned?: TeamUncheckedUpdateManyWithoutOwnerNestedInput;
  };

  export type TeamUpsertWithoutBotsInput = {
    update: XOR<TeamUpdateWithoutBotsInput, TeamUncheckedUpdateWithoutBotsInput>;
    create: XOR<TeamCreateWithoutBotsInput, TeamUncheckedCreateWithoutBotsInput>;
    where?: TeamWhereInput;
  };

  export type TeamUpdateToOneWithWhereWithoutBotsInput = {
    where?: TeamWhereInput;
    data: XOR<TeamUpdateWithoutBotsInput, TeamUncheckedUpdateWithoutBotsInput>;
  };

  export type TeamUpdateWithoutBotsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: UserUpdateOneRequiredWithoutTeamsOwnedNestedInput;
    members?: TeamMemberUpdateManyWithoutTeamNestedInput;
  };

  export type TeamUncheckedUpdateWithoutBotsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    ownerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput;
  };

  export type SubscriberUpsertWithWhereUniqueWithoutBotInput = {
    where: SubscriberWhereUniqueInput;
    update: XOR<SubscriberUpdateWithoutBotInput, SubscriberUncheckedUpdateWithoutBotInput>;
    create: XOR<SubscriberCreateWithoutBotInput, SubscriberUncheckedCreateWithoutBotInput>;
  };

  export type SubscriberUpdateWithWhereUniqueWithoutBotInput = {
    where: SubscriberWhereUniqueInput;
    data: XOR<SubscriberUpdateWithoutBotInput, SubscriberUncheckedUpdateWithoutBotInput>;
  };

  export type SubscriberUpdateManyWithWhereWithoutBotInput = {
    where: SubscriberScalarWhereInput;
    data: XOR<SubscriberUpdateManyMutationInput, SubscriberUncheckedUpdateManyWithoutBotInput>;
  };

  export type SubscriberScalarWhereInput = {
    AND?: SubscriberScalarWhereInput | SubscriberScalarWhereInput[];
    OR?: SubscriberScalarWhereInput[];
    NOT?: SubscriberScalarWhereInput | SubscriberScalarWhereInput[];
    id?: StringFilter<'Subscriber'> | string;
    chatId?: StringFilter<'Subscriber'> | string;
    username?: StringNullableFilter<'Subscriber'> | string | null;
    firstName?: StringNullableFilter<'Subscriber'> | string | null;
    lastName?: StringNullableFilter<'Subscriber'> | string | null;
    botId?: StringFilter<'Subscriber'> | string;
    createdAt?: DateTimeFilter<'Subscriber'> | Date | string;
  };

  export type BroadcastUpsertWithWhereUniqueWithoutBotInput = {
    where: BroadcastWhereUniqueInput;
    update: XOR<BroadcastUpdateWithoutBotInput, BroadcastUncheckedUpdateWithoutBotInput>;
    create: XOR<BroadcastCreateWithoutBotInput, BroadcastUncheckedCreateWithoutBotInput>;
  };

  export type BroadcastUpdateWithWhereUniqueWithoutBotInput = {
    where: BroadcastWhereUniqueInput;
    data: XOR<BroadcastUpdateWithoutBotInput, BroadcastUncheckedUpdateWithoutBotInput>;
  };

  export type BroadcastUpdateManyWithWhereWithoutBotInput = {
    where: BroadcastScalarWhereInput;
    data: XOR<BroadcastUpdateManyMutationInput, BroadcastUncheckedUpdateManyWithoutBotInput>;
  };

  export type BroadcastScalarWhereInput = {
    AND?: BroadcastScalarWhereInput | BroadcastScalarWhereInput[];
    OR?: BroadcastScalarWhereInput[];
    NOT?: BroadcastScalarWhereInput | BroadcastScalarWhereInput[];
    id?: StringFilter<'Broadcast'> | string;
    message?: StringFilter<'Broadcast'> | string;
    botId?: StringFilter<'Broadcast'> | string;
    successCount?: IntFilter<'Broadcast'> | number;
    createdAt?: DateTimeFilter<'Broadcast'> | Date | string;
  };

  export type BotCreateWithoutSubscribersInput = {
    id?: string;
    token: string;
    name: string;
    username: string;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    user?: UserCreateNestedOneWithoutBotInput;
    team?: TeamCreateNestedOneWithoutBotsInput;
    broadcasts?: BroadcastCreateNestedManyWithoutBotInput;
  };

  export type BotUncheckedCreateWithoutSubscribersInput = {
    id?: string;
    token: string;
    name: string;
    username: string;
    userId?: string | null;
    teamId?: string | null;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    broadcasts?: BroadcastUncheckedCreateNestedManyWithoutBotInput;
  };

  export type BotCreateOrConnectWithoutSubscribersInput = {
    where: BotWhereUniqueInput;
    create: XOR<BotCreateWithoutSubscribersInput, BotUncheckedCreateWithoutSubscribersInput>;
  };

  export type BotUpsertWithoutSubscribersInput = {
    update: XOR<BotUpdateWithoutSubscribersInput, BotUncheckedUpdateWithoutSubscribersInput>;
    create: XOR<BotCreateWithoutSubscribersInput, BotUncheckedCreateWithoutSubscribersInput>;
    where?: BotWhereInput;
  };

  export type BotUpdateToOneWithWhereWithoutSubscribersInput = {
    where?: BotWhereInput;
    data: XOR<BotUpdateWithoutSubscribersInput, BotUncheckedUpdateWithoutSubscribersInput>;
  };

  export type BotUpdateWithoutSubscribersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneWithoutBotNestedInput;
    team?: TeamUpdateOneWithoutBotsNestedInput;
    broadcasts?: BroadcastUpdateManyWithoutBotNestedInput;
  };

  export type BotUncheckedUpdateWithoutSubscribersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    userId?: NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: NullableStringFieldUpdateOperationsInput | string | null;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    broadcasts?: BroadcastUncheckedUpdateManyWithoutBotNestedInput;
  };

  export type BotCreateWithoutBroadcastsInput = {
    id?: string;
    token: string;
    name: string;
    username: string;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    user?: UserCreateNestedOneWithoutBotInput;
    team?: TeamCreateNestedOneWithoutBotsInput;
    subscribers?: SubscriberCreateNestedManyWithoutBotInput;
  };

  export type BotUncheckedCreateWithoutBroadcastsInput = {
    id?: string;
    token: string;
    name: string;
    username: string;
    userId?: string | null;
    teamId?: string | null;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    subscribers?: SubscriberUncheckedCreateNestedManyWithoutBotInput;
  };

  export type BotCreateOrConnectWithoutBroadcastsInput = {
    where: BotWhereUniqueInput;
    create: XOR<BotCreateWithoutBroadcastsInput, BotUncheckedCreateWithoutBroadcastsInput>;
  };

  export type BotUpsertWithoutBroadcastsInput = {
    update: XOR<BotUpdateWithoutBroadcastsInput, BotUncheckedUpdateWithoutBroadcastsInput>;
    create: XOR<BotCreateWithoutBroadcastsInput, BotUncheckedCreateWithoutBroadcastsInput>;
    where?: BotWhereInput;
  };

  export type BotUpdateToOneWithWhereWithoutBroadcastsInput = {
    where?: BotWhereInput;
    data: XOR<BotUpdateWithoutBroadcastsInput, BotUncheckedUpdateWithoutBroadcastsInput>;
  };

  export type BotUpdateWithoutBroadcastsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneWithoutBotNestedInput;
    team?: TeamUpdateOneWithoutBotsNestedInput;
    subscribers?: SubscriberUpdateManyWithoutBotNestedInput;
  };

  export type BotUncheckedUpdateWithoutBroadcastsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    userId?: NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: NullableStringFieldUpdateOperationsInput | string | null;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subscribers?: SubscriberUncheckedUpdateManyWithoutBotNestedInput;
  };

  export type UserCreateWithoutFeedbackInput = {
    id?: string;
    username: string;
    password: string;
    profileImg?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bot?: BotCreateNestedManyWithoutUserInput;
    teams?: TeamMemberCreateNestedManyWithoutUserInput;
    teamsOwned?: TeamCreateNestedManyWithoutOwnerInput;
  };

  export type UserUncheckedCreateWithoutFeedbackInput = {
    id?: string;
    username: string;
    password: string;
    profileImg?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bot?: BotUncheckedCreateNestedManyWithoutUserInput;
    teams?: TeamMemberUncheckedCreateNestedManyWithoutUserInput;
    teamsOwned?: TeamUncheckedCreateNestedManyWithoutOwnerInput;
  };

  export type UserCreateOrConnectWithoutFeedbackInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>;
  };

  export type UserUpsertWithoutFeedbackInput = {
    update: XOR<UserUpdateWithoutFeedbackInput, UserUncheckedUpdateWithoutFeedbackInput>;
    create: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutFeedbackInput, UserUncheckedUpdateWithoutFeedbackInput>;
  };

  export type UserUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bot?: BotUpdateManyWithoutUserNestedInput;
    teams?: TeamMemberUpdateManyWithoutUserNestedInput;
    teamsOwned?: TeamUpdateManyWithoutOwnerNestedInput;
  };

  export type UserUncheckedUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bot?: BotUncheckedUpdateManyWithoutUserNestedInput;
    teams?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput;
    teamsOwned?: TeamUncheckedUpdateManyWithoutOwnerNestedInput;
  };

  export type BotCreateManyUserInput = {
    id?: string;
    token: string;
    name: string;
    username: string;
    teamId?: string | null;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type FeedbackCreateManyUserInput = {
    id?: string;
    message: string;
    email?: string | null;
    createdAt?: Date | string;
  };

  export type TeamMemberCreateManyUserInput = {
    id?: string;
    teamId: string;
    role: $Enums.TeamMemberRole;
  };

  export type TeamCreateManyOwnerInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type BotUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    team?: TeamUpdateOneWithoutBotsNestedInput;
    subscribers?: SubscriberUpdateManyWithoutBotNestedInput;
    broadcasts?: BroadcastUpdateManyWithoutBotNestedInput;
  };

  export type BotUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    teamId?: NullableStringFieldUpdateOperationsInput | string | null;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subscribers?: SubscriberUncheckedUpdateManyWithoutBotNestedInput;
    broadcasts?: BroadcastUncheckedUpdateManyWithoutBotNestedInput;
  };

  export type BotUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    teamId?: NullableStringFieldUpdateOperationsInput | string | null;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FeedbackUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FeedbackUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FeedbackUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TeamMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole;
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput;
  };

  export type TeamMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamId?: StringFieldUpdateOperationsInput | string;
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole;
  };

  export type TeamMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamId?: StringFieldUpdateOperationsInput | string;
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole;
  };

  export type TeamUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: TeamMemberUpdateManyWithoutTeamNestedInput;
    bots?: BotUpdateManyWithoutTeamNestedInput;
  };

  export type TeamUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput;
    bots?: BotUncheckedUpdateManyWithoutTeamNestedInput;
  };

  export type TeamUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TeamMemberCreateManyTeamInput = {
    id?: string;
    userId: string;
    role: $Enums.TeamMemberRole;
  };

  export type BotCreateManyTeamInput = {
    id?: string;
    token: string;
    name: string;
    username: string;
    userId?: string | null;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type TeamMemberUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole;
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput;
  };

  export type TeamMemberUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole;
  };

  export type TeamMemberUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole;
  };

  export type BotUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneWithoutBotNestedInput;
    subscribers?: SubscriberUpdateManyWithoutBotNestedInput;
    broadcasts?: BroadcastUpdateManyWithoutBotNestedInput;
  };

  export type BotUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    userId?: NullableStringFieldUpdateOperationsInput | string | null;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subscribers?: SubscriberUncheckedUpdateManyWithoutBotNestedInput;
    broadcasts?: BroadcastUncheckedUpdateManyWithoutBotNestedInput;
  };

  export type BotUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    userId?: NullableStringFieldUpdateOperationsInput | string | null;
    logicFlow?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubscriberCreateManyBotInput = {
    id?: string;
    chatId: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    createdAt?: Date | string;
  };

  export type BroadcastCreateManyBotInput = {
    id?: string;
    message: string;
    successCount?: number;
    createdAt?: Date | string;
  };

  export type SubscriberUpdateWithoutBotInput = {
    id?: StringFieldUpdateOperationsInput | string;
    chatId?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubscriberUncheckedUpdateWithoutBotInput = {
    id?: StringFieldUpdateOperationsInput | string;
    chatId?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubscriberUncheckedUpdateManyWithoutBotInput = {
    id?: StringFieldUpdateOperationsInput | string;
    chatId?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BroadcastUpdateWithoutBotInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    successCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BroadcastUncheckedUpdateWithoutBotInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    successCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BroadcastUncheckedUpdateManyWithoutBotInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    successCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
