/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { Column } from 'react-virtualized';
import BpkDataTableColumn from './BpkDataTableColumn';

const defaultProps = { label: 'Name', dataKey: 'name', width: 100 };

describe('BpkDataTableColumn', () => {
  it('has the same propTypes as react-virtualized Column', () => {
    expect(BpkDataTableColumn.propTypes).toEqual(Column.propTypes);
  });
  it('has the same defaultProps as react-virtualized Column', () => {
    expect(BpkDataTableColumn.defaultProps).toEqual(Column.defaultProps);
  });
  describe('toColumn', () => {
    const toColumn = (props = {}) =>
      BpkDataTableColumn
        .toColumn(<BpkDataTableColumn {...defaultProps} {...props} />);

    it('creates a react-virtualized Column', () => {
      const { type } = toColumn();
      expect(type).toBe(Column);
    });
    it('sets a default className', () => {
      const { props } = toColumn();
      expect(props.className).toBe('bpk-column');
    });
    it('adds additional classNames', () => {
      const { props } = toColumn({ className: 'custom-class-name' });
      expect(props.className).toBe('bpk-column custom-class-name');
    });
    it('passess all additional props', () => {
      const additionalProps = { something: 1, somethingFn: () => true };
      const { props } = toColumn(additionalProps);
      expect(props).toEqual(expect.objectContaining(additionalProps));
    });
  });
});
