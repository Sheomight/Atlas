<template>
  <Navbar />
  <Welcome />
  <ThemeFilter v-model="selectedTheme" :posts="posts" />
  <main class="blogs container">
    <PostList :posts="sortedPosts" />
    <TopList :posts="sortForPopular" />
  </main>
  <TestsAd class="container" />
  <Courses class="container" />
  <Media class="container" />
  <AppFooter class="container"></AppFooter>
  <Social />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Welcome from '@/components/Welcome.vue';
import Social from '@/components/Social.vue';
import ThemeFilter from '@/components/filter/ThemeFilter.vue';
import PostList from '@/components/posts/PostList.vue';
import TopList from '@/components/posts/TopList.vue';
import TestsAd from '@/components/tests/TestsAd.vue';
import Courses from '@/components/courses/Courses.vue';
import Media from '@/components/Media.vue';
import AppFooter from '@/components/AppFooter.vue';
export default {
  components: {
    Navbar, Welcome, Social,
    ThemeFilter, PostList, TopList,
    TestsAd, Courses, Media,
    AppFooter
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Ожирение ч. 2: риски, генетика, и лечение',
          theme: 'Питание',
          ImgSrc: require('@/assets/images/posts/prev1.jpg'),
          date: '9 апреля',
          readingTime: '8 мин',
          views: 234
        },
        {
          id: 2,
          title: 'Ожирение ч. 1: причины и степени заболевания',
          theme: 'Генетика',
          ImgSrc: require('@/assets/images/posts/prev2.jpg'),
          date: '19 марта',
          readingTime: '15 мин',
          views: 21344
        },
        {
          id: 3,
          title: 'Наследственные заболевания ',
          theme: 'Генетика',
          ImgSrc: require('@/assets/images/posts/prev3.jpg'),
          date: '5 марта',
          readingTime: '15 мин',
          views: 3134
        },
        {
          id: 4,
          title: 'Фенилкетонурия или кому нельзя есть много',
          theme: 'Здоровье',
          ImgSrc: require('@/assets/images/posts/prev4.jpg'),
          date: '9 апреля',
          readingTime: '8 мин',
          views: 123
        },
        {
          id: 5,
          title: 'Топ-4 продуктов-афродизиаков',
          theme: 'Рецепты',
          ImgSrc: require('@/assets/images/posts/prev5.jpg'),
          date: '5 марта',
          readingTime: '15 мин',
          views: 567
        },
        {
          id: 6,
          title: 'Почему ДНК-тест сдают один раз в жизни',
          theme: 'Видео',
          ImgSrc: require('@/assets/images/posts/videoPrev.jpg'),
          date: '5 марта',
          readingTime: '15 мин',
          views: 24214
        },
        {
          id: 7,
          title: 'Ожирение ч. 2: риски, генетика, и лечение',
          theme: 'Питание',
          ImgSrc: require('@/assets/images/posts/prev1.jpg'),
          date: '9 апреля',
          readingTime: '8 мин',
          views: 645
        },
        {
          id: 8,
          title: 'Ожирение ч. 1: причины и степени заболевания',
          theme: 'Генетика',
          ImgSrc: require('@/assets/images/posts/prev2.jpg'),
          date: '19 марта',
          readingTime: '15 мин',
          views: 345
        },
        {
          id: 9,
          title: 'Наследственные заболевания',
          theme: 'Питание',
          ImgSrc: require('@/assets/images/posts/prev3.jpg'),
          date: '5 марта',
          readingTime: '15 мин',
          views: 24
        },
        {
          id: 10,
          title: 'Развенчиваем мифы о ДНК-тестах',
          theme: 'Генетические тесты',
          ImgSrc: require('@/assets/images/posts/prev6.jpg'),
          date: '19 марта',
          readingTime: '15 мин',
          views: 24213
        },
        {
          id: 11,
          title: 'Интерпретация данных ДНК: расшифровка',
          theme: 'Микробиота',
          ImgSrc: require('@/assets/images/posts/prev7.jpg'),
          date: '9 апреля',
          readingTime: '8 мин',
          views: 24213
        },
        {
          id: 12,
          title: 'Ожирение ч. 2: риски, генетика, и лечение',
          theme: 'Питание',
          ImgSrc: require('@/assets/images/posts/prev1.jpg'),
          date: '9 апреля',
          readingTime: '8 мин',
          views: 234
        },
        {
          id: 13,
          title: 'Ожирение ч. 1: причины и степени заболевания',
          theme: 'Генетика',
          ImgSrc: require('@/assets/images/posts/prev2.jpg'),
          date: '19 марта',
          readingTime: '15 мин',
          views: 21344
        },
        {
          id: 14,
          title: 'Наследственные заболевания ',
          theme: 'Генетика',
          ImgSrc: require('@/assets/images/posts/prev3.jpg'),
          date: '5 марта',
          readingTime: '15 мин',
          views: 3134
        },
        {
          id: 15,
          title: 'Фенилкетонурия или кому нельзя есть много',
          theme: 'Здоровье',
          ImgSrc: require('@/assets/images/posts/prev4.jpg'),
          date: '9 апреля',
          readingTime: '8 мин',
          views: 123
        },
        {
          id: 16,
          title: 'Топ-4 продуктов-афродизиаков',
          theme: 'Рецепты',
          ImgSrc: require('@/assets/images/posts/prev5.jpg'),
          date: '5 марта',
          readingTime: '15 мин',
          views: 567
        },
        {
          id: 17,
          title: 'Почему ДНК-тест сдают один раз в жизни',
          theme: 'Видео',
          ImgSrc: require('@/assets/images/posts/videoPrev.jpg'),
          date: '5 марта',
          readingTime: '15 мин',
          views: 24214
        },
        {
          id: 18,
          title: 'Ожирение ч. 2: риски, генетика, и лечение',
          theme: 'Питание',
          ImgSrc: require('@/assets/images/posts/prev1.jpg'),
          date: '9 апреля',
          readingTime: '8 мин',
          views: 645
        },
        {
          id: 19,
          title: 'Ожирение ч. 1: причины и степени заболевания',
          theme: 'Генетика',
          ImgSrc: require('@/assets/images/posts/prev2.jpg'),
          date: '19 марта',
          readingTime: '15 мин',
          views: 345
        },
        {
          id: 20,
          title: 'Наследственные заболевания',
          theme: 'Питание',
          ImgSrc: require('@/assets/images/posts/prev3.jpg'),
          date: '5 марта',
          readingTime: '15 мин',
          views: 24
        },
        {
          id: 21,
          title: 'Развенчиваем мифы о ДНК-тестах',
          theme: 'Генетические тесты',
          ImgSrc: require('@/assets/images/posts/prev6.jpg'),
          date: '19 марта',
          readingTime: '15 мин',
          views: 24213
        },
        {
          id: 22,
          title: 'Интерпретация данных ДНК: расшифровка',
          theme: 'Микробиота',
          ImgSrc: require('@/assets/images/posts/prev7.jpg'),
          date: '9 апреля',
          readingTime: '8 мин',
          views: 24213
        },

      ],
      selectedTheme: ''
    }
  },
  computed: {
    sortForPopular() {
      return [...this.posts].sort((post1, post2) => post2.views - post1.views).slice(0, 5)
    },
    sortedPosts() {
      if (this.selectedTheme) {
        return [...this.posts].filter(post => post.theme == this.selectedTheme)
      } else return this.posts
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'DINPro';
  font-weight: 400;
  src: url('./assets/fonts/dinpro.otf');
}

@font-face {
  font-family: 'DINPro';
  font-weight: 600;
  src: url('./assets/fonts/dinpro_bold.otf');
}

@font-face {
  font-family: 'DINPro';
  font-weight: 500;
  src: url('./assets/fonts/dinpro_medium.otf');
}

@font-face {
  font-family: 'Druk Wide Cy Web';
  font-weight: 500;
  src: url('./assets/fonts/Druk-Wide-Cy-Web-Medium-Regular.ttf');
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'DINPro';
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

p {
  margin: 0;
}

.container {
  padding: 0 80px;
}

.title {
  font-family: 'DINPro medium';
  margin: 0;
  font-size: clamp(40px, 8vw, 80px);
  line-height: clamp(50px, 10vw, 100px);
}

.media {
  position: fixed;
  top: 50%;
  right: 0px;
}

.blogs {
  background: linear-gradient(180deg, rgba(217, 217, 217, 0.30) 0%, rgba(217, 217, 217, 0.00) 100%);
  mix-blend-mode: multiply;
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  column-gap: 37px;
}
</style>
