# Generated by Django 2.2.10 on 2021-11-08 12:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_auto_20211026_1611'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='proposal',
            field=models.FileField(upload_to='product_pdfs/%Y/%m/%d'),
        ),
    ]
