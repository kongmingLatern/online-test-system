
const mockComponent = {
  template: '<div><slot></slot></div>',
};

const AntdIcon = {
  'video-camera-outlined': mockComponent,
  'user-outlined': mockComponent,
}

const Antd = {
  'a-layout': mockComponent,
  'a-layout-sider': mockComponent,
  'a-layout-header': mockComponent,
  'a-layout-content': mockComponent,
  'a-layout-footer': mockComponent,
  'a-button': mockComponent,
  'a-menu': mockComponent,
  'a-menu-item': mockComponent,
  'a-menu-item-group': mockComponent,
  'a-sub-menu': mockComponent,
  'a-input': mockComponent,
  'a-form': mockComponent,
  'a-form-item': mockComponent,
  'a-select': mockComponent,
  'a-option': mockComponent,
  'a-upload': mockComponent,
  'a-table': mockComponent,
  'a-table-column': mockComponent,
  'a-pagination': mockComponent,
  'a-popconfirm': mockComponent,
  'a-space': mockComponent,
  'a-tag': mockComponent,
  'a-divider': mockComponent,
  'a-input-number': mockComponent,
  'a-radio': mockComponent,
  'a-radio-group': mockComponent,
  'a-radio-button': mockComponent,
  'a-checkbox': mockComponent,
  'a-checkbox-group': mockComponent,
  'a-switch': mockComponent,
}

const vueComponent = {
  'router-link': mockComponent,
  'router-view': mockComponent,
}

const customComponent = {
  'AdminAside': mockComponent
}

export const globalComponents = {
  ...Antd,
  ...AntdIcon,
  ...customComponent,
  ...vueComponent
};