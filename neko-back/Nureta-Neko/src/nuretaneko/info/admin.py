from django.contrib import admin

from .models import Restaraunt
from .models import News
from .models import Employee

class RestarauntAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)
    list_display =('id','name_ru','address_ru','image_tag','created_date','active')
    search_fields = ('name_ru','address_ru')
    list_editable = ('active',)
    
class NewsAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)
    list_display =('id','title_ru','image_tag','created_date','active')
    search_fields = ('title_ru',)
    list_editable = ('active',)
    
class EmployeeAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)
    list_display =('id','name_ru','position_ru','image_tag','created_date','active')
    search_fields = ('name_ru','position_ru',)
    list_editable = ('active',)

admin.site.register(Restaraunt, RestarauntAdmin)
admin.site.register(News, NewsAdmin)
admin.site.register(Employee, EmployeeAdmin)
