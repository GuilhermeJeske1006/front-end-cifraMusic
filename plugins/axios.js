export default function ({ $axios, redirect, app }) {

  if(app.$cookies.get('token')) {
    $axios.setHeader('Authorization', `Bearer ${app.$cookies.get('token')}`)
  }

  $axios.onError(error => {
    if(error.response.status === 401) {
      app.$cookies.remove('token');
      app.$cookies.remove('user');
      redirect('/login')
    }
  })
}