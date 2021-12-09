import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// Documents
import siteSettings from "./documents/siteSettings";
import navigation from "./documents/navigation";
import post from "./documents/post";
import page from "./documents/page";

// Reusabls
import richText from "./reusables/richText";
import figure from "./reusables/figure";

// Objects
import link from "./objects/link";
import navItem from "./objects/navItem";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    /* Your types here! */
    siteSettings,
    navigation,
    page,
    post,
    richText,
    figure,
    link,
    navItem,
  ]),
});
