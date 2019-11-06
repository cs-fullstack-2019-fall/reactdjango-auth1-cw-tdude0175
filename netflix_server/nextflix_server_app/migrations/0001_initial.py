# Generated by Django 2.0.6 on 2019-11-05 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NetflixModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('movieTitle', models.CharField(max_length=200)),
                ('rating', models.DecimalField(decimal_places=1, max_digits=1)),
                ('movieLength', models.IntegerField()),
                ('views', models.IntegerField()),
            ],
        ),
    ]
