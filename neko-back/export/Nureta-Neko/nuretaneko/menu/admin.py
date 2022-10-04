from django.contrib import admin
from .models import Dish
from .models import DishCategory

from django.utils.safestring import mark_safe

class DishAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)
    list_display =('id','name_ru','price','image_tag','category','discount','status')
    search_fields = ('name_ru','price','category','discount','status',)
    list_filter = ('category','status')
    list_editable = ('status',)
        
    
class DishCategoryAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)
    list_display =('id','name_ru','status',)
    search_fields = ('name_ru','status',)
    list_filter = ('status',)
    list_editable = ('status',)

admin.site.register(Dish, DishAdmin)
admin.site.register(DishCategory,DishCategoryAdmin)