import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** columns and relationships of "image" */
export type Image = {
  __typename?: 'image';
  alt: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  programs: Array<Program>;
  updated_at: Scalars['timestamptz'];
  url: Scalars['String'];
};

/** columns and relationships of "image" */
export type ImageProgramsArgs = {
  distinct_on?: InputMaybe<Array<Program_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Program_Order_By>>;
  where?: InputMaybe<Program_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "image". All fields are combined with a logical 'AND'. */
export type Image_Bool_Exp = {
  _and?: InputMaybe<Array<Image_Bool_Exp>>;
  _not?: InputMaybe<Image_Bool_Exp>;
  _or?: InputMaybe<Array<Image_Bool_Exp>>;
  alt?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  programs?: InputMaybe<Program_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "image". */
export type Image_Order_By = {
  alt?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  programs_aggregate?: InputMaybe<Program_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** select columns of table "image" */
export enum Image_Select_Column {
  /** column name */
  Alt = 'alt',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
}

/** Streaming cursor of the table "image" */
export type Image_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Image_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Image_Stream_Cursor_Value_Input = {
  alt?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "program" */
export type Program = {
  __typename?: 'program';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  image_id: Scalars['uuid'];
  name: Scalars['String'];
  /** An object relationship */
  thumnail: Image;
  updated_at: Scalars['timestamptz'];
};

/** order by aggregate values of table "program" */
export type Program_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Program_Max_Order_By>;
  min?: InputMaybe<Program_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "program". All fields are combined with a logical 'AND'. */
export type Program_Bool_Exp = {
  _and?: InputMaybe<Array<Program_Bool_Exp>>;
  _not?: InputMaybe<Program_Bool_Exp>;
  _or?: InputMaybe<Array<Program_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  thumnail?: InputMaybe<Image_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "program" */
export type Program_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "program" */
export type Program_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "program". */
export type Program_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  thumnail?: InputMaybe<Image_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "program" */
export enum Program_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** Streaming cursor of the table "program" */
export type Program_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Program_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Program_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "image" */
  image: Array<Image>;
  /** fetch data from the table: "image" using primary key columns */
  image_by_pk?: Maybe<Image>;
  /** fetch data from the table: "program" */
  program: Array<Program>;
  /** fetch data from the table: "program" using primary key columns */
  program_by_pk?: Maybe<Program>;
};

export type Query_RootImageArgs = {
  distinct_on?: InputMaybe<Array<Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Image_Order_By>>;
  where?: InputMaybe<Image_Bool_Exp>;
};

export type Query_RootImage_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootProgramArgs = {
  distinct_on?: InputMaybe<Array<Program_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Program_Order_By>>;
  where?: InputMaybe<Program_Bool_Exp>;
};

export type Query_RootProgram_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "image" */
  image: Array<Image>;
  /** fetch data from the table: "image" using primary key columns */
  image_by_pk?: Maybe<Image>;
  /** fetch data from the table in a streaming manner : "image" */
  image_stream: Array<Image>;
  /** fetch data from the table: "program" */
  program: Array<Program>;
  /** fetch data from the table: "program" using primary key columns */
  program_by_pk?: Maybe<Program>;
  /** fetch data from the table in a streaming manner : "program" */
  program_stream: Array<Program>;
};

export type Subscription_RootImageArgs = {
  distinct_on?: InputMaybe<Array<Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Image_Order_By>>;
  where?: InputMaybe<Image_Bool_Exp>;
};

export type Subscription_RootImage_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootImage_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Image_Stream_Cursor_Input>>;
  where?: InputMaybe<Image_Bool_Exp>;
};

export type Subscription_RootProgramArgs = {
  distinct_on?: InputMaybe<Array<Program_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Program_Order_By>>;
  where?: InputMaybe<Program_Bool_Exp>;
};

export type Subscription_RootProgram_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootProgram_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Program_Stream_Cursor_Input>>;
  where?: InputMaybe<Program_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetProgramsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;

export type GetProgramsQuery = {
  __typename?: 'query_root';
  program: Array<{
    __typename?: 'program';
    id: any;
    name: string;
    thumnail: { __typename?: 'image'; alt: string; id: any; url: string };
  }>;
};

export const GetProgramsDocument = gql`
  query GetPrograms($limit: Int, $offset: Int) {
    program(limit: $limit, offset: $offset) {
      id
      name
      thumnail {
        alt
        id
        url
      }
    }
  }
`;

/**
 * __useGetProgramsQuery__
 *
 * To run a query within a React component, call `useGetProgramsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProgramsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProgramsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetProgramsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetProgramsQuery, GetProgramsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProgramsQuery, GetProgramsQueryVariables>(
    GetProgramsDocument,
    options,
  );
}
export function useGetProgramsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProgramsQuery, GetProgramsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProgramsQuery, GetProgramsQueryVariables>(
    GetProgramsDocument,
    options,
  );
}
export type GetProgramsQueryHookResult = ReturnType<typeof useGetProgramsQuery>;
export type GetProgramsLazyQueryHookResult = ReturnType<typeof useGetProgramsLazyQuery>;
export type GetProgramsQueryResult = Apollo.QueryResult<
  GetProgramsQuery,
  GetProgramsQueryVariables
>;
