import category from './category'
import createSchema from 'part:@sanity/base/schema-creator'
import dish from './dish'
import featured from './featured'
import restaurant from './restaurant'
import schemaTypes from 'all:part:@sanity/base/schema-type'

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([
    restaurant,
    dish,
    category,
    featured
  ]),
})
