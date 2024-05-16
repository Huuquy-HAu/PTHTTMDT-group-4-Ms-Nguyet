import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <div className="top">
        <div className="chSocKhachHangMain">
          <div className="ChamSocKhachHang">
            <div className="name">
              <span>CHĂM SÓC KHÁCH HÀNG</span>
            </div>
            <ul>
              <li>
                <a href="">Trung Tâm Trợ Giúp</a>
              </li>
              <li>
                <a href="">TruePhone Blog</a>
              </li>
              <li>
                <a href="">TruePhone Mail</a>
              </li>
              <li>
                <a href="">Hướng Dẫn Mua Hàng</a>
              </li>
              <li>
                <a href="">Hướng Dẫn Bán Hàng</a>
              </li>
              <li>
                <a href="">Thanh Toán</a>
              </li>
              <li>
                <a href="">Shoppe Xu</a>
              </li>
              <li>
                <a href="">Vận Chuyển</a>
              </li>
              <li>
                <a href="">Trả Hàng & Hoàn Tiền</a>
              </li>
              <li>
                <a href="">Chăm Sóc Khách Hàng</a>
              </li>
              <li>
                <a href="">Chính Sách Bảo Hành</a>
              </li>
            </ul>
          </div>
          <div className="ChamSocKhachHang">
            <div className="name">
              <span>VỀ TruePhone</span>
            </div>
            <ul>
              <li>
                <a href="">Giới Thiệu Về TruePhone Việt Nam</a>
              </li>
              <li>
                <a href="">Tuyển Dụng</a>
              </li>
              <li>
                <a href="">Điểu Khoản TruePhone</a>
              </li>
              <li>
                <a href="">Chính Sách Bảo Mật</a>
              </li>
              <li>
                <a href="">Chính Hãng</a>
              </li>
              <li>
                <a href="">Kênh Người Bán</a>
              </li>
              <li>
                <a href="">Flash Sales</a>
              </li>
              <li>
                <a href="">Chương Trình Tiếp Thị Liên Kết TruePhone</a>
              </li>
              <li>
                <a href="">Liên Hệ Với Truyền Thông</a>
              </li>
            </ul>
          </div>
          <div className="ChamSocKhachHang">
            <div className="name">
              <span>THANH TOÁN</span>
            </div>
            <ul className="image">
              <li>
                <div className="img">
                  <img
                    src="https://downloadlogomienphi.com/sites/default/files/logos/download-logo-visa-mien-phi.jpg"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="img">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="img">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPwjvhZtos8Ye-J7U2C4e5nVo6fUz39Hw1DmdiMaE5el-d9vSbSSeHHh9BCgIhglKK0E&usqp=CAU"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="img">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="img">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="img">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAApVBMVEX///8AaP8DyncAY/93m/8AZv/0/PgAx24AYP+s5cIAWP8Ax2zd9uoAyXQAXv+p6Mddif9P05IAW/+xyf/k7P8jcv/R3f/v9P8AVf+06MeSsv/X8+Lf6f/1+f/W4v8AxWa/0v/A7tZp2qKGp//I2f+7zf9Cff+pw/8gbP+Yt/9bkf8od/+jvv+K4LOT4bfp+vM7z4dRg/95of8ATP8kzoFh1JV53Ko6NsLYAAAIN0lEQVR4nO2b2WKqOhRAixjhYIMapVKts6VWtGqP7f9/2s2IEBKVoHgfzn5REJPFHrOJPtVt69Hy9I/hH8P/iAHYrv8oBgBs20chstqLj6oZAJkceSGI1ovNtPdEpTIGPLmLfDuI2t+bZa8/ejpJBQzE5q5tB3jy6biXnvz+DOTOfS/0sM0/38f9/Nz3ZCBG9z1kRevvz+mb4sbvygAAUfsqPtTx5L0zt34PBuztRO9WVP98X6psfkcGqnbkIexw2OYF5y7LwCZ3V3G7PsAOZzi7KQNxd9cGVownf3m71uY3YqB3HuIUVx90l70bzF2AgdvcJWrvvpTSugkDnty3reCwxpP3yhm9OAMta8gL8OTLcynufgy2B9aDj5vavCADQO3pvdR+JYMbvFcJoGJA63ub/yKDW6+aIMdgt6tHkBjAqqpY0DN43QcgZBlAXGlMKhn8z0cgZBm8R3hDlgFYNxq0t3wxZbhVYE5xxWsX8KwMw23yU38FsFkHZgzncuTLezcr0zftpR6xawGdXmeLUeS7OYk0haUUA4h1Vy18Ky++Rm3lGHzNRaMDUDAAS+13pRisUFe2666KIbgHA9KF9dsK+Ym4XCm+xvXLMfjaktXrDk7C1QA015ZjcK8K6gUzjK9b8pVjuCpJbRBDWJxO9d/SrXaOYdQ/vzzM1u4r4F+YO9gHMW5/cAhWQVTH9e6jvV7KDP1NO4qjaP2h58gyaDw9JaMVRQChKLEfAAEirjsdhMD1llmGhc0+tj1rcxWDhS6uqdvMGdBUfN8TqQP45COc51IMbys/ySzA09UxaS03voAw8LPOMEBWVkCQYujFmdFdjaklhqn6KiFT5gzJYHQ6i7anQMHAlZZ8itRxl2XQpR0ufcScYSVM1raZlqP62rdzDF2mNBTU6yuuP2WxzTLY3+cQRhGfUlhs7LJpSXodcZ4UQ0CJPeqLnxTCV44vMZwNzm9+M8nK95N6A1oyQjpliqEXUrvxab/JROqFu9TjRGeCc8MRTolsTb5srwWRn2XoIivVNfVDeqQyxvV91guLQjuFGZMzrlDL2M4yDGisHjIX28uLDJatDc4+T052ipJq3//gR2/kihTDws5Yl/qLewUDUl1DZc0rVbq0RpRB5D9ZDxLD1XpAuoTKkxFapE8yfxC+zux/YuD+IUxH/cFS6VlicDXByUPdXWfO0hIKXJ4tIkkPS5rAhKk2WaIzDPZBcQ1Ouiw/gmDcP4nID26dDrzhySJhGHkpB6LOcoqhcwxgpWRYiyQYB4nEhynPk+6h+zL9RpbEwF0IrD6Xy8GKXqmuBTIDUClrHCYfp+XvC/8AoBDxcdIMb1x7vueJRYfyDmUGZXB+yNWRO8/iQt3cZNsSgNS9We6ZmEpby9BSCXHgejINoMUR3+qYMDDLL9KIwNUsmWWGJONkJPZBvssBfwnvAOsZkE2ksLsIbTt8fxrF+EzIxvn0RCcA0EqXe3J6UFbv0XcMfEncmOWS3iKyfDsm68lNu07m6beDWOSZ3ncQIoQ8FGmXcjkGdfTgcXs5SdZ9o/QBuzp12B93N5v3c9t7MoO+772f5BjsxzPo+94qGdTVu2EsBgxIFcSN32PNTOBxW5xBGZx7Bxoy1GDztzCDqu8dTkwJKMWuKIOq7201yzA0nwszxPnAqJzBzi+tCQNsnqSYdxRnUPW9mAEeX4dCZts9LEBhwJC09VmGYebMrHY9hAGDYhOj1YQdOdfMnTsyKJ5aE4bcyZ9rIQwYFH2vkmF3Rz2ASM8w3H59fbW4Wb6uVIQJQ77vTRheJw4RNuiOZ0/onI9VEwaQC84TA01WwkFJbEDn+DOfk1h1akcSsc5xn8QMrJH3BgyKpbXEUJuwUfd4/M6Mvh12JvPn3fAInXnj6ZlDwOPwaffjmDDkl9Y5BjZxBzpfyTX03a52JC8zxtCkOWVvpIdc35tjYJVw77TkK/d79gKpyej7n4kBQz44JQaHB+pknhuuA+nLloRMkxI2jPwhv82ZigtcsSZHpobhROTOXZJEO81X8vJMWNnHraYJg+VpGYZfrVZrxs/O+SqtVXOav5yiw3XUgTXItLSHRgxIThDKPDmbDPkr0TtfsHUgsz6pcpR1Zhab+YdSKobnmkNfG9T/RF3FoUK102hCGiGktBkx+HJrqGCYiUmeWagwByQ2YN4yn7BgdYzypGJpLTPsZqRycwaWsXmmwAxNaoNXNvOXKUNuaZ0wzOZEfo6sQDyJOyV6eBUM7NLGDz0+QkMGID+yScUmJMKqgdofxFs6MfNXI4aV1KjLeTJTD2cTmI4LzHZqaubQlMHypeW9mkEUi9b+eNyK/AATBRFdQMPabeX7XjUDd0psjlSepDcusti2ac4g970aBiffznZSxQqXCtM1jJXfUkoY/mSXb85MHq6T1v6rU4JBDk6ceVnm+c0ywNoJgr7bsUcE3Cv3sASD3PdiBjrsMNd3Tra8qd6SvNhgaqhNaNLk2cuUQfqZCek3nf22o2h9HWePl9pz6NQceBSZ40h9dAtLMUjbTrTvhprVM15WS5+woN2Jk2YMlp8NzoK9v1i8lGOQnvEXY+Ahuy+rh2zfuyvGQENkKEII7i89mlMzyH1vyykgLCrmE34oPTW4miG32TH8U0BIGW+Ig9alJ2I6BhBc/OINRcNgVfnEWMOg3++tjEG9pVQ1g37XpTqGxeWv3ptBt6VUJUOlwan7L0yu730AQ5VbSlo9FPqF9H0YkHK/t1qGKoNTx3Cj33uXYgBFfqx+L4agusDQMii2lKpmkJfWD2FA1f1TTK+HAn9euBdDdcH5H3sAtXlNurGpAAAAAElFTkSuQmCC"
                    alt=""
                  />
                </div>
              </li>
            </ul>
            <div className="name">
              <span>ĐƠN VỊ VẬN CHUYỂN</span>
            </div>
            <ul className="image">
              <li>
                <div className="img">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="img">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="img">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="img">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACBCAMAAABaUbAjAAAAyVBMVEX////8/////f75///+//3//P/wdXzyjZTsABDrEyv72tvuGi/yf4f8/f/sACLqABnqAAD0iYryYmnuAB/wZ3TtRE/4u8D75uj5//vxhIPziZDya23rFSbzlp3xmJvvABj98/T2s7bvN0v2q63tsa/xy8736+/unaLtiJf43eL2hpfuqqnzx8XxVF/4AAb0kJHxwMjgS1TpBjv3xL31mZTuGzf2AC3qLzT35d/6qbLnkZzuLz7kR1nsPEX6c33t0Mj8nq7gXmTnnpoHp82jAAAHoUlEQVR4nO2X/XeiOBfHc5OAxEigoEBtKlFHXWekdXbGsS7j9Jn9//+o5wao7bzQ3dnfdk8+pz0HSYBvbu5bCHE4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOP77ULodDr3+Yfzn7RXDuQC9E4F4FEL66woAnwX+S4/gA5kq40HP18yb6XTFeKOVrje/Dba97/fyzdvbh+LXZXNCvTAkv6QbbfQuTuObnq/tdFRWaxLaa9iU6s6nfeZmV0Ea3PcO9xOSouCU/NKDlLDlYXS16xnOhJSLvPEMCoPoECWm703sOj2kV/1O1A9wagro3yYWUsrJ84SQ4SOwH4aEAbELRi+j/MF6G94oGBSZ1Pp9zqiFz7RUY0MozmxcHn3dGIrrsU5PyZWS0fXl3dy+y97mjYvZV+M9/NGsi6Nn2HEPo4WybPyHAcaA/Fw6L36P1GTHLsv8MBFB9eFQRh8LdHKTTRdSlZFKD5PZkHrr30uhpdRK6SiKlBZCCiFUWh5yhpNHk08qTdNIJrMh4EqvUfbV87fsQlHlkxjaBq3ntdJ4yOwaOC8KgFNcGbuCPoOzWSqiyfpJtalTEWRvIqETdJZ8LEqtUoV/WkTHEzPnONWoO01VhPJKdZAHgasqjzl7SEQUaSsbp6SLE1r8G9mh3a3mI21g0MZ5AW39fUzTkJ3SxOBQXxbyQvNZyXT59PuPUqqELQOpbyjk51TKqPKnb0djmUoRf4T97VhKUY+mDW8rofXE/shIXuOMMsEfo0QpoeOMfCsbN4+uG9qcCTYTbYfbB9N5fztq1uuCrzc6yc3asB7d6FjzSIgz9SD0GKwXWos5LAOBssmpFFKdrK/ycP9ZS302jGfoI5OcNL5Lbhvftl4J9xqXc0JHCLnZLYTUGKrfOgmsvk4akinFAGJ0/vVcS1lXX3JcA9wm7ejk/Jida33Aiw3rC0vwaKVEPAcPUPYMt3dMO9nUV1KNGFgI2ys084oBZpJGdsOtakISMYmS5YBROzmEuRbynH8nm07jie/7X8Y6XgzBM+NAJqPbmX+O0VJkE4ux3zAe7v0qPfsjf95XczjzYK50WhUsLLyiFjrYA2llryt9TN/YvaSGwg5jL93BS9n0peyFlmnGTJNg6FwK+Wn1nWw2imfWULCb3I0Ak7rMMOUAy/1APLBxjBZqhjEo4BTdcJvn+kpZyLlJcKvnGMJkHqBnFwSWkZWdoxI9HS2QerLA7ZRq1eTtn8pWeH/gn+3syeKACeawbWVfPgxWNqYSj5wCYUCXf6JrhCGH/BBsAGWDHaWh5xH4H4akR0LKfq66ydqZsokjpGGCfpBh4e5knzFnqLsyCIKyLDFtBBPDOtlwkZ22snOFaxd3UWBnB5h84q+Nb5dXz19urY3myePYbJXCfcXtxiReBSNyG4vNCj0Z7V+EbFnaTFK8Vt4ZT5RQGQYnpmCfh5x0sicYZYl/4ctgWHDok40pPE1Gz7Ona8zb6DjXl56EtrJtmkXZKyWH7W1gfjDmdFYHsV7M9jmmB2hkh6+Itq/JUnQOYBV+ZQX0SbaptEjfXUozLzD46Q9O0sk2tc06z3UcPZRZ2eqa/yj7oZEtGtmYxeFLMMZclGebpI7j2s//luwC04DWer+KhbohXkHIsrSy+Q0a8Mo6XCsbuIe1/wMWxnoLbWaysj+v7QL4RMjg9jnyQ+uX11royjx9p5PNsSCg7DxN97ZQ8sZJpqTJV9TsTnWZYC6L/lq2B6tPQnx9r8Vh1Xz4XWTLDRtgAal3ITx7Z0HZ40EcMAyhiXOMCikHtsWAe3xmsn+eCphSN+VRpEuDFsWMdZHtsdtgYcixHDQxiCEpg3eMd008zFO0yimqDNBXW3W7++gPSOQXTcVaRlLdUC9X6VEfx9NBx3Rp25SqlEf13r+fbgls60gedTUaTNcrLFSi9i9zRxllGHYS7T26v6K4iE526GXnYArwMZDvKGMszMflwTDanTzIn+nZkCyt96E1WH9Q2leuDljHU/VAPOsS6CQom8EckwM2SqlNJkjsYx6F4ecIi1JZxh8IPlcHmAODKB7CSaY6TYMOdTctQjI/YpSoKIoNsbLTSZIkFfov7hbQqyg++PdXCbrzDpvlpGUS3PkczPgurqsT0Fdko3eHbzUmrVtsGbFuQnZQeopbD9txXWvV7IStNhtmW82H2bk+YF5+tJVh+1tdS6Xfrz26GtvbLVqrOcOebuvXWMJEjb0xylZ1U71vMkykhJnHL1gNjovJDPtgvqm70l5NDfbPZlnZ4u69fjQCeFjttrzt0ICsh9vuPs+HFx4uSzd42EQDdpOxHzLNbe/F5Lw9nACsh8PH5kF0ks0PJlubV3X9BR6aFjU3517MciG0XZkHBXRYFU/H4tBew5MztsNI0TaiLW2b54HtabpO9SkBvpRN/snh5wLvaN9lq1dToaDt6MOnGS9mk0sLb7v77sHLnuKd7gU4sRum/vey7fmF9p1g/g7YCDZnouZLtn8PGwPx5gjS3iYvzho0xPGwO0zhdchamz13PvTpqIVnrLA7zcyxLf+Wdvn/XLbD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOByOfwf/B744oY8tCJ8mAAAAAElFTkSuQmCC"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="img">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="img">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAACPCAMAAAD0vXihAAAAnFBMVEX/ABL/////AAD8AAD4Xl/89/f5AAD8///2vL72AAD+//39ARP0rq3zAAD/AA7snZ7wa2/2OTv2V1b1Ki33y8z33+Humpz0v8L5AhX3YmHyMi/2XFj1xMjzdXPysrLwfH375+bvICH57u/tvr3uZWf31dH0mpnuiozzg4XyOELlrK7sRErqVlf119rzpqTno6XwCRn2q7PwgXruQkMwWJXxAAAEk0lEQVR4nO2XbXfiKhDHAyNggqBJyJPbapJGbbfGtev3/253IPbedk9frHuu+2p+6hFITvhnZhiGKCIIgiAIgiAIgiAIgiAIgiAIgiAIgiCI/wmNRPjRnwdr/YlPF++oxmrLEWlrLfl/gNRWA/8aq++nqIa0mc2aJrVyjY13mm+1rrPZlzS5vaOFzAMTQrBHCRvfuKIWsdx+6H+kMvdTE1nTMk8H8dRgTOFPpBD37DPqaVitVo8rY++oh2fCz9Ub24UGE7uqUGwPcPhFDuvbom3beXzPcI7gOcz1wO2LCLbZxmDKvoN8MlcyWSxJ2PeX19fXY6bvaR20zyJM+wyRCfZZSBxL91JuJsdNJEpNnV18XzkRjApNoBrQ4PyEW8CYyjtrTouJH8FA/WLjO+X5znKsUd4lbWoj3mBTvUnMhdZG9j3ZnIN53DU53VlOxI/BDU5igpbedf0FPsXrFNZqz+8s5F1PGcLkBFEdwcBUonYxCtLeEkFXXAXBl7+kR7qgp+Haxkvlm6oyVssf20vtDWXzIqSj+t6OupIX4fVRAuz9og5pz/CuZ/04A5+ewpiDv6JHw0x4+xRSy+ewvEffH88rL+IVfcRDelIHbyvcZTng12rf8E30K+CfjnyHQwQgYRqDP9SzDebZAKS9X2hz84yLibVh6Ruv4SnkncHPuSrLcrk+HGq+Ws4u5dtbFsPx9La8SH5c4qVXmW1cWcuXk3tL/8iemlchBT9zfkJvqXlsZamuiXDjMxEmSez0GD4W81PfCzNnWY7byxxNqQ6yYDumnqW/1M8OSrRKHlVSiG+3xv9UZRm/ZyZixuXoJWQ8srHzcZQkovHuyMKG4WKUdhat6XLIVLkRx3hs846NcTvWDatM26673PSi61Lp1LG+0Tz/FlomuKutLfi4Vj8lxnU9Kp8B59L7cx/sh9lH24652ZBa2wr2E7rWyVQ9pWKBHt7n/TgMFxBsH3OzYwsDN9WQPFtOlN/962PyjXiIGPHzbPLBBY9tvcVhHvRkoDVfYTmkthw3tjHmM9E+JCJ7VGjLvRwUQ+fB0LMi5RiJIpM3eCqST5/rmpJrvvVGYcm4K66busAUaKd00PuCEEq2bZqcH5UQhm9ZO24yeVBLx1b8wMpmyDlcHFtwyBe47d7ireyaad55RfPGH/ZzNZVkfoKpGMHso+OdyGUMa7F7xGrgpC5+WTtmUlXJTZLGRq5r07B53ZlOFDcUSdo49VENToyvr+ND/z6cuOA9103Zhy39Sqtb1hbjxalhnYz4iDM+Soo+vqidKRSWaulDu+vVUPauwHLu9/XIrJp/pFqG44LlZjjNnZuftp08L/DCw5Yfwq0+Mdr1pqqqxdEtQZfz9dzXSfhme9ktTjE+pHLnvRufBnlw48NW3rK+aviF63HBcgnWhr4N41h3SP+Pmz+ur9CspdQa7whjmJMwTiSWTuEpYGvgNUj83qDGr0T7ERypr0J15Csffzj0DX9MREnTadBGtQ1j09lrMmk4RupQL70fGm0YukUPQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRBf8g8J21BLyRF+NQAAAABJRU5ErkJggg=="
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="img">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAflBMVEX///8AsicAsSF2yXwArAAAsyvj9ecAsBsAsy7x+vPt+PAAqQAArg77/vzZ8d5Hv1o1ukqh2ai/58cCtTV1y4KQ1p2t4riL0I89v1ee2KOz5L6F0pOa2qW65cJoyHaM1JdZxWpmxGzO7NR/z4pSwmIruEHH6s5sy38IuD9gyHKEWy+/AAAEYUlEQVR4nO2W23asKBCGgaDiGUXYNh7aiGj3+7/gAG2nk70ya83Fnslc1HdDWWD5UxQgQgAAAAAAAAAAAAAAAAAAAAAAAAAAAD9OHFfZf/GdMo3T8u86Z8Plvy9hn4s8zyNTfd/dDfX4err2daBv/qSE8p50Squp6W7/RMQbjgpPPvxJDYvVxgoh+KyfrrMpy1OEm/XzAb1F9d46pm/y9u2KluU3Zvl1qKT7ze5Zmq0DDY6p296vGVqPni+jH9uZ6z7UfAsPLhPv55taqdS3sVKtb1W3zDJ+9FXSGOXGl82bcz7qWptlCU7UOqtr0g8NcTSJ+2n7sWlfGCnfdUff5Hi1yYrQ0TT0LkfZF/sXEXte1H5SOCncp6skIQnB9Oq7BooJoRvaCXFOUjiRsXX9CaErKrcCe0t/iFBC4fhTYu69Xqzdr0LdLe+bmWRokqw5rOWjiarPIpDE2BWLwVi5CQjG7mNnWeJcbcLscdgqw+zWjZ1gNkaGsHcp73ZFKmHbVR72JeJYfs2+bZVnjXOXmH1ac8X7dpW0qQe0U81Fuzb5uMy+JrjpHNLltY6KeEpwh7yURPnEcmYzdI+Yk5uiAd9WvzYJubixfch2iuaIeCt9HT51N5uQwG3bluhQm/FjzXxw723sKCqi7BKKham8RG+MJY6idiKyG+OCcWelPOpCvJUQjTgOMVNOHtvKkB5tEdOPlBtMmq9VPc/dW/jcMFzHSye73r1Xvl+5ChVjVaFM1z/eZqqofCaugyOUaYuFCKtZiWR6BBREIk6aR70J3jtqy25oShhmdnBfX3HkLLO+REh+4WnIxMKtNPJXf/HbVto9zMUquo5UPw4m2+Dqc004NlcJKIgozqA3cv0QgQUjHoyFE9wzjAlzcdfNW0R9RFnJnp9PwzyP1yACzbIfniL2YlJhbUqi8/irCJ0wEfZMJZ4xmVuCU0Rmoy6cKW0bphRPA2E29LRXwaLXqbFsugipVaSl8fAQMfKGuvfKyolojNE3f3kctcRfdgdaI7b1jPkNKtgWYjY42stTRPke9a/DIDBifHomHL0KoyqGxvL7zNmlW9ApoqTSkOXgkrtMpMemWX1woW3jRSxZ7MlQyRnJKhzdSydCkCMuU81YjZ4i0FRE9ZqlaSxH1DRxmqZLxFArvdVF0ae7ec03PY3jNM00e4pAmg6t/KVbJyJDWbK1jVHa+rPp3B0JPUKZu8klrhRdJvqC1JYwtzolx+fttiQsEb1N6IAMJZxHUTIgRYnlApP6c4rSjlJe03x2iTLPa3vlua1zaZvc6U3veVQTOviEz0moNVJ0Oi/CEdMntHWFWRl/r/X+gGD55Yx9uYXbrt6RFrRICle1LrS3iuO3lUr3ZmxDclyezr6yasa1zMpHzmI9Tg8rzU5SZ4UyKF3rRbhBUxU8cfzxgbSadBuXp7UHfxlPav8X/pOCiJ/m/yEioj8vIp7vPy8CAAAAAAAAAAAAAAAAAAAAAAAAAADgN/4CIYNXC3fbwZ4AAAAASUVORK5CYII="
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="img">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAACPCAMAAABj7N97AAAAyVBMVEXEIDL///8AAADAABjAABTEHTC+AADDFCrBAyDBABzDGC3uzc/CBCPYiIv36OnMUVvdlZnipqvNVl/78/TKT1XqwcPWeoHScXWrHCzMITQbGxtiYmIkBgkABADw09Xl5eWhoaG7HzCAGCPJPUq/AArz3N11dXXGMD+NHCjYgojKRU/c3NzSaXIqKio8PDzlr7JNTU0WBAY8DREyCw9XFRx1GSMADw6YGijOYWSVl5evsrLs9vbGysoPDw8zMzOAgICcPERCBg5fEhp2l/7EAAAH+UlEQVR4nO2a/XuiOBDHQyCENxFMUaldrEVE0RZta62u3Tv9//+oS3hRbC1199C9vSefH/pgCThfMjOZCQLA4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+H8NAih321CJWiKZIRhiCUV/25T/iWaDEax7gWB7li+/CerQUroEBLE1qhme4Tokar9bpN+FQ1YglcT5ZT+xCNxaPxuo34NhB1S00RV9pu10QTIktoy9Ug54UoNn5IrThtVDbJuvqq43wxId9wlxKtLCg4C/8ugwSKoa196oyH6dcW4kBrRJleq0jC7yxdIeVh9px4mevpXE4PruiAIelSu2RgROsrWLhKAuCE0JbFlrq5hxsM68JUrMhJLr9N8U2B4YZmZRjMZJNgXiT8jDiQjIku453odyJJl9ksdQ7RTK4VamZkySQeZjQvkeS0iEwOYt7DI29juy8RSyy6UvUyLXWIlUrNBwugCE4MnZqTWuomC6wwIpySSHb3UyWQns9IqnZdsEGldQItoORrQl7Az7u5Y/4DjWJ4E5ZHQyqyclGrJFAfgAsEv67EUkc5U6N6uEt9e366F7o+BB0JS7uOGlUixpLJBCCeuaEaXiH05sPuN7v1a6NzeLtnXwvXDWBhMzQiQSakWhJuxE09KpVAfDi3Hsf1TVt5/jWxacmsMx0Ln+vov9pzhPVwLgwdSB+Z7LQhpWiG3IcUAysfnzQYVRmkq1pSig7G7HNynMmTPlifj+4GwnnbGbF5upwOhO6VaeuSVaVETFESbAuBHUajkAtHuDH366TE9ZeAwinywsz47k0tGCrvL1VUUourr174T96++T+EtEXaMB7AThD6pU9uwbSWEInUWk5ie/ZqmN+SnJ2o+outtejwxpEnsETNwaiC1Hk/SM6P0CYi4adO70OmnQyqvX1XLMXwyoGm4s+MBwpUu1pM8JmbZSnsN8vRqyexCrb5fBUUrPY5lO38knp9YKmUrqsc+IbmZL0rplV/E2s+iNcwIO2v4DsGSLZ19VabFrBXmzRY/0xIXTA1xQYtOtaCwqIQxqTYlIN9siS2hcyjl1tRogitoEcyCCcnCd0xLcZDgsVK/oAXhQHiH+UVh+rMYcawqTvdASkdoSSBdXsT3389waKI6puUA0lQO5wW3PoypuOQ0JgRrkjme7qUMqBdJdpCERUEL2T12cqV9poWYO2eM8aEWILGimQTWZJKHVRBWmpuR6tl9DQTd5X2qZLqk5aIGzKZyoMUcATTK1dCV57gWp274edB41NADLUCtCXpLlgyjn4dOvdrErEwIbWNDSxivlp3Bcv3dbNHVbWSmy1muhbxKmibVsk8j5bgWh3aQWMnsNCPtnRZaKoQqYoulnPU1zYrzsuzFKtAMZAWEok+wQcMhyIr0XEvMGgAcZeFrq0e1kAa7yBjtPfFQC1sqNRD6Uf01u8KuOi3Xk04JqbIUIllmvXnfCgA60GKxPLzLqtSEo3ks6et3FfQHLVit1+KgkN0Fp1+tFmDkrQrKyiQMSCtL/flamUQPAnq5liRd4M+0GGF8kLWZFrliLTgyD1YtJOm776hQixEJH6hcC5BqBBUSijEyd5tA1Wkx6rlz0YItCM6lBfW9eN8Qo9Dc70dUpgXhrMUkVqsRhSE5kxbqZYWGvG/r+/aiMi3UkZOj4EoxMF0DzqaFNrxeXhphX2jss351Wl5T6+0kc+Ur1Tm0aL45SreQkKrHhURZuRZHxDS5hGeLF4o6ImLiWMpIKG7yVaelnuXjGKhKM8/NZ9EC5CBmazBdDg82IquLfZBvqBU5jxbcSHpioxn4xdq1upysNC+mBSg66yZoC3aw9VrhWnnQ5Tjny2OAlVHER0b9+9+ae0yLcYqWfpkWIO96BmKrZ9SCwGKzrimyvoTbdkEMrqVEaV3QSj9R+1GYHo7CZB8mOW4meV3z92fe9S9hLdY9z7EbfZSOKd3A/UXc9hbCVSBHZNyBsznYh4ySkpU4RvqJ2aylh0m1g7PjdFDhzLuaX1NxGIaAXb+/UbWg3hbed7qCELKvXk9f4PDYKLfX6wE3v6R3yp3lzCn1XZ+CzvyDCPeONfksDpK8OX6As3Z2qredz13gLubzBRhuHx+fFwC0t/Ph4nmzbZfelLqUJGelSvV9yqcwLW9sXkwzmZc3eLOzE0LYBu6M/p2n+wELtw3hjB09uWU3Bapl2/k2kl3+wrBC3Lvr1fINDrqJEmbmXguVOWfWb9z2Zt5e3MANaH+D8Hn+RuWVeotc2A+reCOsBPfuZS2sB/B6tc7eW+61tGdUBp2SBQ2X9mLxBGc9qmUD3GcIh6UT099rCc6zjBwj0SIIKwizfaWCFrClH57hUw8tNjNIZ+Qb0/LsMn2lWhDYN8TnSL2fkGkR9luxey3uEH57fIJz1PsGn4ZU1ala8pfmwhevmiuGxkuq5fajFtB7op9nScTfue7jyVpogZc52Ei54M/SdvNyTItLV1H4iJJ5eX483cc033J0usa3/NJ361VD/egleZlU0LJ7lKg9u5kxq4c3NA0/37z12m83VMvdbFYe+8hQ2BsxfOnfbw03cLrea9ksiifb7WSW3N5i0evR417yD/r3pKX/4ri9O/jSGa9SKcPe4QPP58h10bv//DdxaU328oOF+fa/burXIHfBovyg4v9zccGQlo7/Cyl/vmtxOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcP7H/AOUQLyhNvu5AgAAAABJRU5ErkJggg=="
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="img">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="img">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="ChamSocKhachHang">
            <div className="name">
              <span>THEO DÕI CHÚNG TÔI TRÊN</span>
            </div>
            <ul className="icon">
              <li>
                <a
                  href="https://facebook.com/quyduonghuu.duonghuu"
                  className="iconA"
                >
                  <div className="logos">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                  </div>
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com/huuquy2002" className="iconA">
                  <div className="logos">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                  </div>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/quy-duong-385714227/"
                  className="iconA"
                >
                  <div className="logos">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAB2CAMAAADPy5AKAAAAZlBMVEUoZ7L///8AWKwhZLHBz+Xu8vg4cbdeiMErabMTX64EXa6Rq9JSf7309/vQ2+xylsjm7PXg5/LW4O4AVaudtdervtx8m8qzxN9DdrkAUqo1bbXK1ulWhL9mjcRLe7u6yuODos4ATahaUwb0AAADwUlEQVR4nO2ci3KrIBCGF4mJQLwRbzVq7Pu/ZNXmpqDRjsA5M+xMp0nZmG9gcX9YKaDerqw66rCiTiM0a9D9xA0hGLQYppgtsVyxJpBfo/U8S6QXpYPJZlnOmlEAvg4zLJzoRgF8mmFJ9LMAyCcThNqHCMAJ5CwnEyzygLEslsWyKGPBhDqOQxVxbmHBTskOPA7S0FFyV97AQo63R3OUOUZZSOW/OeQKJMVqFnIeexyoOZbSn7ikuw/TWhbnJvg0e4/SShZcTLulC5m9R2klC5HIdH/vQVrJInU77jxIK1m+YolTbYhFJkUNsUil6N7LlpUsNJU47Z2U1s5pyQqTG5pHQMSAaQ31CxBhtRvvnpBW5yOaT1x2TwFbNMMIxq/2l1MbtBRNXjmJNwqU3RaN6TTpLw1vlUjeTdobO5eizip8UbMJsXVNgrG6/ar/d31kWfZjwd1ik1JCPgeaYhZMSXHKWGdtWBVAFyfgehbvDyTEY4H7vKgbH0K8sJW+OjcK4tt/5kZ8nrYlQxv1pjms+1TuzUoNdSzYSaSX7hpnukYZC/bkO6Sd8UIeNqpYcCFbOdwtkusNVSzeQkGoi2JpBCti+V7old64TBSqYWEzYfsymVhWw3L9hIKiUhfLCpN0jDGWSIwYYyyS1bg5lkToGHMs8ZdmFpcHfO6uJ+RIlSycHXutDkXiypqracAoZGGPsj+mpSxPCrNaHUv4Ngb4IskJqTYWNgoH2Z7sTRdL/HmvOtDFwiZ3D0lRfoqrjMUT6gnCXIo0sYj6hAi529XEItYKhH0t5GtiER/NoIK80sUiqhPSil+ih0V8TETcCNXFItl6DC2LZbEslsWymGXRlRsti2WxLJbFslgWy2JZLItaFvRnlowHY7s+tzVwM2kKuPjoHT4JF/grC2BnakttknLi0gU2smiwMYvr/iMsqQfnwqkD8yzxMYv9rmduRWuahcOzg+rQMAu+Iv+W5znvbw6JURbG+spo2Gak7sapdE2y0G4CRf05Ok5ihNrcIItfoneWawh7Pz+9imUoGfC+ohLhjLF+jFB0NnK+EQ/Ft3hgAca++9hFUQVXA+c+qyFcfHwfo3pIx4cWFDye+8kepbcy7lliFA1lnvAGKFBxwmjJSHW/v+VdmET9gYTU8VEMPnSdc9HaM7R4JqMm6WCGWPGRdxjOlQdHVQfTBMOEZq9Crds8hFvkJb9n3JGfVyWAN9j91/ACHu+ff3w3GDu/OcHow+/uZcZHciFs0sh3gwz6EIKXitBgYu2a9/91IMyHhh+ndVV6qnxlVAAAAABJRU5ErkJggg=="
                      alt=""
                    />
                  </div>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="ChamSocKhachHang">
            <div className="name">
              <span>TẢI ỨNG DỤNG TruePhone </span>
            </div>
            <a href="" className="updateApp">
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/d91264e165ed6facc6178994d5afae79.png"
                alt="download_qr_code"
              />
              <div className="apps">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png"
                  alt="App Store"
                />
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png"
                  alt="Play Store"
                />
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png"
                  alt="App Gallery"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="baoLuuVaquocGia">
          <div className="baoLuu">
            @ 2024 Dương Hữu Quý. Tất cả các quyền bảo lưu
          </div>
          <div className="quocGia">
            <div>Quốc gia & Khu vực:</div>
            <div className="qg-kv">
              <a href="">Singapore</a>
            </div>
            <div className="qg-kv">
              <a href="">Indonesia</a>
            </div>
            <div className="qg-kv">
              <a href="">Đài Loan</a>
            </div>
            <div className="qg-kv">
              <a href="">Thái Lan</a>
            </div>
            <div className="qg-kv">
              <a href="">Malaysia</a>
            </div>
            <div className="qg-kv">
              <a href="">Việt Nam</a>
            </div>
            <div className="qg-kv">
              <a href="">Philippines</a>
            </div>
            <div className="qg-kv">
              <a href="">Brazil</a>
            </div>
            <div className="qg-kv">
              <a href="">Mexico</a>
            </div>
            <div className="qg-kv">
              <a href="">Colombia</a>
            </div>
            <div className="qg-kv">
              <a href="">Chile</a>
            </div>
            <div className="qg-kv">
              <a href="">Poland</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-container">
          <div className="chinhSach">
            <a href="">
              <span>CHÍNH SÁCH BẢO MẬT</span>
            </a>
          </div>
          <div className="chinhSach">
            <a href="">
              <span>QUY CHẾ HOẠT ĐỘNG </span>
            </a>
          </div>
          <div className="chinhSach">
            <a href="">
              <span>CHÍNH SÁCH VẬN CHUYỂN</span>
            </a>
          </div>
          <div className="chinhSach">
            <a href="">
              <span>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom-logo">
          <a
            className="asd"
            target="_blank"
            rel="noopener noreferrer"
            href="http://online.gov.vn/HomePage/AppDisplay.aspx?DocId=29"
          >
            <img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
              height="32"
              width="83"
              alt=""
            />
          </a>
          <a
            className="asd"
            target="_blank"
            rel="noopener noreferrer"
            href="http://online.gov.vn/HomePage/AppDisplay.aspx?DocId=29"
          >
            <img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
              height="32"
              width="83"
              alt=""
            />
          </a>
          <a
            className="asdfg"
            target="_blank"
            rel="noopener noreferrer"
            href="https://shopee.vn/docs/170"
          >
            <img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
              width="32"
              height="32"
              alt=""
            />
          </a>
        </div>
        <div className="footer-bottom-address">
          <div className="company">Công ty TNHH TruePhone</div>
          <div>Địa chỉ: Km10 - Nguyễn Trãi , Hà Đông , Hà Nội</div>
          <div>
            Chịu Trách Nhiệm Quản Lý Nội Dung: Dương Hữu Quý - 2055010222 - Điện
            thoại liên hệ: 0389332572
          </div>
          <div>© 2024 - Bản quyền thuộc về Công ty TNHH TruePhone</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
