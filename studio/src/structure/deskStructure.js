// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdPerson, MdDescription, MdLocalOffer } from 'react-icons/md';

export default () =>
  S.list()
    .title('Base')
    .items([
        S.listItem()
          .title("Settings")
          .icon(MdSettings)
          .child(
            S.editor()
              .id("siteSettings")
              .schemaType("siteSettings")
              .documentId("siteSettings")
          ),
        S.divider(),
        S.listItem()
          .title("Posts")
          .icon(MdDescription)
          .schemaType("post")
          .child(S.documentTypeList("post").title("Posts")),
        ...S.documentTypeListItems().filter(
          (listItem) =>
            !["post", "siteSettings"].includes(
              listItem.getId()
            )
        ),
      ]);
