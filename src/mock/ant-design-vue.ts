const mockComponent = {
  template: '<div><slot></slot></div>',
}

const AntdIcons = {
  'video-camera-outlined': mockComponent,
  'user-outlined': mockComponent,
  'upload-outlined': mockComponent,
}

const AntdComponents = {
  'a-layout': mockComponent,
  'a-layout-sider': mockComponent,
  'a-layout-header': mockComponent,
  'a-layout-content': mockComponent,
  'a-layout-footer': mockComponent,
  'a-button': mockComponent,
  'a-card': mockComponent,
  'a-card-meta': mockComponent,
  'a-card-item': mockComponent,
  'a-menu': mockComponent,
  'a-menu-item': mockComponent,
  'a-menu-item-group': mockComponent,
  'a-sub-menu': mockComponent,
  'a-input': mockComponent,
  'a-input-search': mockComponent,
  'a-modal': mockComponent,
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
  'a-breadcrumb-item': mockComponent,
  'a-breadcrumb': mockComponent,
}

const vueComponents = {
  'router-link': mockComponent,
  'router-view': mockComponent,
}

const customComponents = {
  AdminAside: mockComponent,
}

export const globalComponents = {
  ...AntdComponents,
  ...AntdIcons,
  ...customComponents,
  ...vueComponents,
}
