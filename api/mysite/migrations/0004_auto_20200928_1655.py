# Generated by Django 3.1.1 on 2020-09-28 07:55

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0003_auto_20200928_1553'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='experience',
            name='when',
        ),
        migrations.AddField(
            model_name='experience',
            name='end_date',
            field=models.DateField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='experience',
            name='start_date',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='experience',
            name='institution',
            field=models.CharField(default='아무거나', max_length=20),
            preserve_default=False,
        ),
    ]
