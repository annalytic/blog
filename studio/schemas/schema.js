import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import siteSettings from './documents/siteSettings';
import post from './documents/post';
import richText from './reusables/richText';
import figure from './reusables/figure';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    /* Your types here! */
    siteSettings,
    post,
    richText,
    figure
  ]),
})
