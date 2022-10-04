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


urlpatterns = [
    path('admin/', admin.site.urls),
    path('service/reviews', ReviewAPIList.as_view()),
    path('service/reviews/<int:pk>', ReviewAPIRetrieve.as_view()),
    path('service/order', OrderAPICreate.as_view()),
    path('service/orders/<int:pk>', OrderAPIRetrieve.as_view()),
    path('service/reservation', ReservationAPICreate.as_view()),
    path('service/reservations/<int:pk>', ReservationAPIRetrieve.as_view()),
    path('menu/', include(router.urls)),
    path('info/', include(info_router.urls)),
    path('auth/', include('djoser.urls')),
    re_path('auth/', include('djoser.urls.authtoken')),
]

urlpatterns+=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)