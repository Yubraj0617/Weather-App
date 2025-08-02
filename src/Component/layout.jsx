// Layout.jsx
import { Outlet } from 'react-router-dom';
import Bar from '../Component/Bar';

export default function Layout() {
  return (
    <div>
      <Bar />
      <Outlet />
    </div>
  );
}
