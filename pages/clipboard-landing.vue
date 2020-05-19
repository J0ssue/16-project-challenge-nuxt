<template>
  <div class="clipboard-landing">
    <Header :header="clipboard.header" />
    <Snippets :snippets="clipboard.snippets" />
    <Access :access="clipboard.access" />
    <Workflow :workflow="clipboard.workflow" />
    <Download :download="clipboard.download" />
    <Footer :footer="clipboard.footer" />
  </div>
</template>

<script>
import clipboard from '~/helpers/clipboard-landing'
import Header from '~/components/clipboard-landing/ClipboardHeader'
import Snippets from '~/components/clipboard-landing/ClipboardSnippets'
import Access from '~/components/clipboard-landing/ClipboardAccess'
import Workflow from '~/components/clipboard-landing/ClipboardWorkflow'
import Download from '~/components/clipboard-landing/ClipboardDownload'
import Footer from '~/components/clipboard-landing/ClipboardFooter'
export default {
  name: 'clipboard-landing',
  components: {
    Header,
    Snippets,
    Access,
    Workflow,
    Download,
    Footer
  },
  data() {
    return {
      clipboard
    }
  }
}
</script>
