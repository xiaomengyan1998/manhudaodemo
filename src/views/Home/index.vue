 <template>
  <div class="page-home">
    <header class="index-header">
      <a href="mine.html?cpid=0">
        <div class="header-user">
          <div class="user-btn"></div>
        </div>
      </a>
      <div class="header-logo"></div>
      <a href="search.html?cpid=0">
        <div class="header-search"></div>
      </a>
    </header>
  </div>
</template>

 <script>
export default {}
</script>
 <style scoped lang='scss'>
.page-home {
  /* color: red;
  font-size: 30px; */
  display: flex;
  flex-direction: column;
  height: 100%;
  .index-header {
    /* color: chocolate;
    font-size: 30px; */

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    height: 44px;
    .user-btn {
      /* color: darkblue;
      font-size: 30px; */

      width: 25px;
      height: 25px;
      background: url('../../assets/icon/user-btn.png') no-repeat;
      background-size: 100%;
    }
    .header-logo {
      /* color: darkgreen;
      font-size: 30px; */
      width: 92px;
      height: 28px;
      background: url('../../assets/logo.png') no-repeat;
      background-size: 100%;
    }
    .header-search {
      /* color: rgb(0, 0, 0);
      font-size: 30px; */

      width: 25px;
      height: 25px;
      background: url('../../assets/icon/search.png') no-repeat;
      background-size: 100%;
    }
  }
}
</style>