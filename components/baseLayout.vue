<template>
    <div>
      <static-navbar/>
      <main>
        <slot></slot>
    </main>
    <static-footer/>

    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseLayout'
  }
  </script>
  