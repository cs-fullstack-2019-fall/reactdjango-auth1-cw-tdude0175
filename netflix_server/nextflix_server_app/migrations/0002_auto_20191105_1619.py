# Generated by Django 2.0.6 on 2019-11-05 16:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nextflix_server_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='netflixmodel',
            name='rating',
            field=models.DecimalField(decimal_places=1, max_digits=2),
        ),
    ]
