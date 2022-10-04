from django.contrib import admin

from .models import Review
from .models import Order
from .models import Reservation
from .models import OrderDetails


class ReviewAdmin(admin.ModelAdmin):
    list_display =('id','user','rating','active','created_date')
    search_fields = ('user',)
    list_filter = ('rating','active','created_date')
    list_editable = ('active',)
    

class DishInlineAdmin(admin.TabularInline):
    model = Order.dishes.through    

    
class OrderAdmin(admin.ModelAdmin):
    list_display =('id','user','time','status','client_address')
    search_fields = ('user','time','client_address')
    list_filter = ('time','status','created_date')
    list_editable = ('status',)
    inlines = (DishInlineAdmin,)
    
class ReservationAdmin(admin.ModelAdmin):
    list_display =('id','user','time','people_count','status','restaraunt',)
    search_fields = ('user','time','people_count','status','restaraunt',)
    list_filter = ('time','status','created_date')
    list_editable = ('status',)


admin.site.register(Review, ReviewAdmin)
admin.site.register(Order,OrderAdmin)
admin.site.register(Reservation,ReservationAdmin)
admin.site.register(OrderDetails)