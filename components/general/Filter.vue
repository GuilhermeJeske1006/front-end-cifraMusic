<template>

<div class=" p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
<form class=" flex items-center">   
    <label for="simple-search" class="sr-only">Procurar</label>
    <slot></slot>
    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Procurar</span>
    </button>
</form>


</div>
</template>