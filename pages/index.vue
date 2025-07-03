<template>
  <div>
    <div class="container flex">
      <div>
        <div v-for="(item, index) in 40" :key="index" class="relative flex flex-col overflow-hidden rounded-[24px]">
          <NuxtImg src="/cards/1.png" class="absolute w-full z-0"/>
          <div class="flex">
            <UiButton class="rounded-2xl">About us</UiButton>
            <p>To accomplish its long-term goal, Agrofusion has developed a robust origination network over the years…</p>
          </div>
          <UiButton>Learn more</UiButton>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
