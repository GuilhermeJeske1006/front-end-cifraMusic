<template>
    <base-layout>
      <static-header :item="'Buscar Música ou Artista'" />
  
      <div class="mx-auto max-w-7xl mb-20 sm:py-3 sm:px-6 lg:px-8">
        <div class="bg-white sm:py-12">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div class="mx-auto max-w-2xl lg:text-center">
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Busque uma nova música</p>
                <p class="mt-6 text-lg leading-8 text-gray-600">Encontre a sua música abaixo, você pode fazer a pesquisa pelo nome da música ou filtrar através do artista ou ritmo da mesma.</p>
              </div>
            </div>
          </div>
  
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
         
          <general-tabs :items="tabs" />


        </div>
  
      </div>
    </base-layout>
  </template>
    
  <script setup>
  
  const tabs = [
    {
      icon: ` <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 1h10M6 5h10M6 9h10M1.49 1h.01m-.01 4h.01m-.01 4h.01"/>
    </svg>`,
      name: 'Por Música',
      href: '/search/music'
      
  
    },
    {
      icon: `<svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 19">
      <path d="M15 5a1 1 0 0 0-1 1v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a1 1 0 0 0-2 0v3a6.006 6.006 0 0 0 6 6h1v2H5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9v-2h1a6.006 6.006 0 0 0 6-6V6a1 1 0 0 0-1-1Z"/>
      <path d="M9 0H7a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z"/>
    </svg>`,
      name: 'Por Artista',
      href: '/search/artist'

  
    }
  ]
  
  </script>
    