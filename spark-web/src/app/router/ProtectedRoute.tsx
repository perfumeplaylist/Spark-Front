import { Outlet } from 'react-router';

export default function ProtectedRoute() {
  return (
    <div>
      ProtectedRoute
      <Outlet />
    </div>
  );
}
