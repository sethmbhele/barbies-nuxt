<template>
  <div class="dining">
    <PageHero 
      title="Fine Dining" 
      subtitle="Experience culinary excellence"
      image="/images/dining/dining.jpg"
    />

    <div class="content-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="entry">
              <div class="entry-content">
                <h2>Our Restaurant</h2>
                <p>Experience the finest French cuisine in an elegant setting. Our master chefs create exceptional dishes using the freshest local ingredients.</p>
                
                <div class="menu-section">
                  <DiningMenuCategory title="Appetizers">
                    <DiningMenuItem 
                      v-for="item in appetizers" 
                      :key="item.id" 
                      :title="item.title"
                      :price="item.price"
                      :description="item.description"
                    />
                  </DiningMenuCategory>

                  <DiningMenuCategory title="Main Courses">
                    <DiningMenuItem 
                      v-for="item in mainCourses" 
                      :key="item.id" 
                      :title="item.title"
                      :price="item.price"
                      :description="item.description"
                    />
                  </DiningMenuCategory>

                  <DiningMenuCategory title="Desserts">
                    <DiningMenuItem 
                      v-for="item in desserts" 
                      :key="item.id" 
                      :title="item.title"
                      :price="item.price"
                      :description="item.description"
                    />
                  </DiningMenuCategory>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="sidebar">
              <div class="widget widget-opening-hours">
                <h3 class="widget-title">Opening Hours</h3>
                <ul>
                  <li>
                    <span>Monday - Friday</span>
                    <span>12:00 - 23:00</span>
                  </li>
                  <li>
                    <span>Saturday</span>
                    <span>12:00 - 00:00</span>
                  </li>
                  <li>
                    <span>Sunday</span>
                    <span>12:00 - 23:00</span>
                  </li>
                </ul>
              </div>

              <div class="widget widget-reservation">
                <h3 class="widget-title">Make a Reservation</h3>
                <p>For reservations, please call us or book online:</p>
                <p class="phone">+33 1 23 45 67 89</p>
                <a href="#" class="button button-filled">Book a Table</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const appetizers = [
  {
    id: 1,
    title: 'French Onion Soup',
    price: '18',
    description: 'Classic French onion soup with melted Gruyère cheese'
  },
  {
    id: 2,
    title: 'Escargots de Bourgogne',
    price: '22',
    description: 'Burgundy snails in garlic-herb butter'
  },
  {
    id: 3,
    title: 'Foie Gras',
    price: '28',
    description: 'Duck liver terrine with brioche and fig jam'
  }
]

const mainCourses = [
  {
    id: 1,
    title: 'Coq au Vin',
    price: '42',
    description: 'Braised chicken in red wine with mushrooms and pearl onions'
  },
  {
    id: 2,
    title: 'Beef Bourguignon',
    price: '48',
    description: 'Classic beef stew in red wine sauce'
  },
  {
    id: 3,
    title: 'Duck à l\'Orange',
    price: '52',
    description: 'Roasted duck breast with orange sauce'
  }
]

const desserts = [
  {
    id: 1,
    title: 'Crème Brûlée',
    price: '16',
    description: 'Classic vanilla custard with caramelized sugar'
  },
  {
    id: 2,
    title: 'Tarte Tatin',
    price: '15',
    description: 'Upside-down caramelized apple tart'
  },
  {
    id: 3,
    title: 'Chocolate Soufflé',
    price: '18',
    description: 'Warm chocolate soufflé with vanilla ice cream'
  }
]
</script>
