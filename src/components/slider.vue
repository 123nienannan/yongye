
<template>
  <div class="demo">
    <input class="range-slider" type="hidden" value="480,1320"/>
  </div>
</template>

<script>
import $ from 'jquery'
import '@/lib/jquery.range.js'
import '@/lib/jquery.range.css'
export default {
  data () {
    return {

    }
  },
  mounted () {
    $('.range-slider').jRange({
		from: 0, to: 1440, step:30,
		scale: ['00:00','04:00','08:00','12:00','16:00','20:00','24:00'],
		format: '%s',
		width: 400,
		showLabels: true,
		isRange : true
	});
  }
}
</script>

<style>
/* .demo {
  margin-top: 100px ;
  margin: 100px auto;
} */
</style>
