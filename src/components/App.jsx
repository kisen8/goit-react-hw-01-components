import { Profile } from './Profile';
import user from '../json/user.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} nona={'5'} />
    </div>
  );
};