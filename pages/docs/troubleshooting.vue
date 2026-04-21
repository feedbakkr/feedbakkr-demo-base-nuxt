<script setup lang="ts">
import ui from '~/assets/css/ui.module.css'
import docs from '~/assets/css/docs.module.css'

const site = useSite()
const { troubleshooting } = site.docs
</script>

<template>
	<Section variant="hero">
		<div :class="docs.docPage">
			<article>
				<p :class="docs.breadcrumb">
					<NuxtLink to="/docs">Docs</NuxtLink> / {{ troubleshooting.title }}
				</p>
				<h1>{{ troubleshooting.title }}</h1>
				<p :class="ui.lede">{{ troubleshooting.intro }}</p>

				<ul :class="docs.issueList">
					<li v-for="issue in troubleshooting.issues" :key="issue.title">
						<p :class="docs.issueTitle">{{ issue.title }}</p>
						<p :class="docs.issueBody">{{ issue.resolution }}</p>
					</li>
				</ul>

				<p style="margin-top: 1.5rem; color: var(--text-muted)">
					{{ troubleshooting.cta }} <NuxtLink to="/contact">Contact us</NuxtLink>.
				</p>

				<div :class="docs.docFeedback">
					<span>{{ troubleshooting.feedback }}</span>
					<div :class="docs.docFeedbackActions">
						<button type="button" :class="[ui.button, ui.buttonSecondary]" disabled>
							Yes
						</button>
						<button type="button" :class="[ui.button, ui.buttonSecondary]" disabled>
							No
						</button>
					</div>
				</div>
			</article>

			<aside :class="docs.sidebar" aria-label="Related">
				<h4>Related</h4>
				<ul>
					<li><NuxtLink to="/docs/getting-started">Getting Started</NuxtLink></li>
					<li><NuxtLink to="/docs/sdk-setup">SDK Setup</NuxtLink></li>
					<li><NuxtLink to="/contact">Contact support</NuxtLink></li>
				</ul>
			</aside>
		</div>
	</Section>
</template>
