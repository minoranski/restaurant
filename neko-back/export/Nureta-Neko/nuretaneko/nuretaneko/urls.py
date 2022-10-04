"""nuretaneko URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from menu.views import *
from info.views import *
from service.views import *
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers
from django.contrib import admin

admin.site.site_header = 'Nureto-Neko - АДминка'
admin.site.site_title = 'Nureto-Neko - АДминка'
admin.site.site_url= 'http://127.0.0.1:3000/'


router = routers.SimpleRouter()
router.register(r'dishes', DishViewSet)
router.register(r'categories', DishCategoryViewSet)


info_router = routers.SimpleRouter()
info_router.register(r'news', NewsViewSet)
info_router.register(r'employees', EmployeeViewSet)
info_router.register(r'restaraunts', RestarauntViewSet)

# service_router = routers.SimpleRouter()
# service_router.register(r'reviews', ReviewViewSet)
# service_router.register(r'orders', OrderViewSet)
# service_router.register(r'reservations', ReservationViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('dishes/<int:dish_id>', views.dish),
    path('service/reviews', ReviewAPIList.as_view()),
    path('service/reviews/<int:pk>', ReviewAPIRetrieve.as_view()),
    path('service/order', OrderAPICreate.as_view()),
    path('service/orders/<int:pk>', OrderAPIRetrieve.as_view()),
    path('service/reservation', ReservationAPICreate.as_view()),
    path('service/reservations/<int:pk>', ReservationAPIRetrieve.as_view()),
    
    # path('dishes', DishViewSet.as_view({'get':'list'})),
    # path('dishes/<int:pk>', DishViewSet.as_view({'get':'retrieve'}))
    path('menu/', include(router.urls)),
    path('info/', include(info_router.urls)),
    path('auth/', include('djoser.urls')),
    re_path('auth/', include('djoser.urls.authtoken')),
    # path('service/', include(service_router.urls))
]

urlpatterns+=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)