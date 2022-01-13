@extends('layouts.master')
@section('content')
<div id="app">
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
</div>      
@endsection
