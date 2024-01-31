export default function ({ app, redirect }) {

  const isAuthenticated = app.$cookies.get('token');

  if (isAuthenticated) {
    return;
  } else {
    redirect('/login');
  }
}
