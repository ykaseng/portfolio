<template>
  <div class="container">  
    <Title title="Career History" />
    <Label title="vinda group sea" description="2018-2021" />
      <Description description="develop and maintain disributed microservices" />
      <Description description="develop and maintain web based applications" />
      <Description description="automate and streamline internal processes" />
    <Label title="rhino designs" description="2017-2018" />
      <Description description="develop and maintain api libraries" />
      <Description description="develop and maintain backtest server" />
      <Description description="develop and maintain scraper bots" />
      <Description description="research and implement quantitative trading strategies" />
    <Label title="zalora malaysia" description="2013-2014" />
      <Description description="develop and maintain web based applications" />
      <Description description="develop and maintain customer and seller engagement system" />
      <Description description="develop and maintain data visualization tools" />
  </div>
</template>

<script>
import Title from '@/components/Title'
import Label from '@/components/Label'
import Description from '@/components/Description'

export default {
    name: 'Career',
    components: {
        Title,
        Label,
        Description
    }
}
</script>

<style scoped>
@keyframes slideDown {
    from { visibility: hidden; }
    to { visibility: visible;  }
}

.container {
  max-width: unset;
}

/deep/ .description-container {
  float: left;
  justify-content: flex-start;
}

/deep/ .description {
  overflow: hidden;
  visibility: hidden;
  animation: slideDown .1s steps(1);
  animation-fill-mode: forwards;
}

/deep/ .container:nth-child(3) .description {
  animation-delay: 1.8s;
}
/deep/ .container:nth-child(4) .description {
  animation-delay: 1.9s;
}
/deep/ .container:nth-child(5) .description {
  animation-delay: 2s;
}

/deep/ .container:nth-child(7) .description {
  animation-delay: 2.1s;
}
/deep/ .container:nth-child(8) .description {
  animation-delay: 2.2s;
}
/deep/ .container:nth-child(9) .description {
  animation-delay: 2.3s;
}
/deep/ .container:nth-child(10) .description {
  animation-delay: 2.4s;
}

/deep/ .container:nth-child(12) .description {
  animation-delay: 2.5s;
}
/deep/ .container:nth-child(13) .description {
  animation-delay: 2.6s;
}
/deep/ .container:nth-child(14) .description {
  animation-delay: 2.7s;
}
</style>