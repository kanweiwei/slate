import mixin from '../utils/mixin'
import Block from '../models/block'
import Change from '../models/change'
import Decoration from '../models/decoration'
import Document from '../models/document'
import History from '../models/history'
import Inline from '../models/inline'
import Leaf from '../models/leaf'
import Mark from '../models/mark'
import Node from '../models/node'
import Operation from '../models/operation'
import Point from '../models/point'
import Range from '../models/range'
import Schema from '../models/schema'
import Selection from '../models/selection'
import Stack from '../models/stack'
import Text from '../models/text'
import Value from '../models/value'

/**
 * The interface that all Slate models implement.
 *
 * @type {Class}
 */

class ModelInterface {
  /**
   * Alias `fromJS`.
   */

  static fromJS(...args) {
    return this.fromJSON(...args)
  }

  /**
   * Alias `toJS`.
   */

  toJS(...args) {
    return this.toJSON(...args)
  }
}

/**
 * Mix in the common interface.
 *
 * @param {Record}
 */

mixin(ModelInterface, [
  Block,
  Change,
  Decoration,
  Document,
  History,
  Inline,
  Leaf,
  Mark,
  Node,
  Operation,
  Point,
  Range,
  Schema,
  Selection,
  Stack,
  Text,
  Value,
])
