import { nodes } from 'prosemirror-schema-basic'
import { orderedList, bulletList, listItem } from 'prosemirror-schema-list'

const listNodes = {
  ordered_list: {
    ...orderedList,
    content: 'list_item+',
    group: 'block'
  },
  bullet_list: {
    ...bulletList,
    content: 'list_item+',
    group: 'block'
  },
  list_item: {
    ...listItem,
    content: 'paragraph block*',
    group: 'block'
  }
}

export default {
  ...nodes,
  ...listNodes
}
