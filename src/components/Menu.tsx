// import { Menu, type MenuProps } from 'ant-design-vue'
// import {
//   HomeOutlined,
//   PaperClipOutlined,
//   FileSyncOutlined,
// } from '@ant-design/icons-vue'
// import { reactive, ref } from 'vue'

// const App = () => {
//   const selectKeys = ref<string>('home')
//   const MenuItems = reactive([
//     {
//       key: 'home',
//       icon: <HomeOutlined />,
//       text: '首页',
//     },
//     {
//       key: 'practiseTask',
//       icon: <PaperClipOutlined />,
//       text: '试题库',
//     },
//     {
//       key: 'grade',
//       icon: <FileSyncOutlined />,
//       text: '成就管理',
//     },
//   ])
//   const onClick: MenuProps['onClick'] = e => {
//     selectKeys.value = e.key as string
//   }

//   return (
//     <Menu
//       mode="horizontal"
//       v-model:selectedKeys="selectedKeys"
//       onClick={onClick}
//     >
//       {MenuItems.map(item => {
//         return (
//           <>
//             <Menu.Item key={item.key} icon={item.icon}>
//               {item.text}
//             </Menu.Item>
//           </>
//         )
//       })}
//     </Menu>
//   )
// }

// export default App
