<script setup lang="ts">
import type { NuxtError } from '#app'
import ui from '~/assets/css/ui.module.css'

defineProps<{
	error: NuxtError
}>()

const site = useSite()
const { title, body, cta } = site.error404

function handleError() {
	clearError({ redirect: '/' })
}
</script>

<template>
	<NuxtLayout>
		<Section variant="hero">
			<div style="text-align: center">
				<p style="color: var(--accent); letter-spacing: 0.09em; font-weight: 600">
					{{ error?.statusCode ?? 404 }}
				</p>
				<h1>{{ title }}</h1>
				<p :class="ui.lede" style="margin: 0 auto 1.25rem">{{ body }}</p>
				<button type="button" :class="[ui.button, ui.buttonPrimary]" @click="handleError">
					{{ cta }}
				</button>
			</div>
		</Section>
	</NuxtLayout>
</template>
